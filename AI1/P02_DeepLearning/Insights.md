## P02a Introduction to Pytorch

| concept                                                                                                                                                                                      | description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| tensor.function_                                                                                                                                                                             | in-place operation                                                                                                         |
| tensor.cpu()                                                                                                                                                                                 | moves it from the cpu so that we can convert it to numpy for example                                                       |
| t1 + t2                                                                                                                                                                                      | if they are no the same size still works if one dimension is the same and the other dimensions are multiples of each other |
| t.permute()                                                                                                                                                                                  | doesnt swap dimensions but orders the dimensions in the specified order                                                    |
| broadcasting                                                                                                                                                                                 | the thing one does when the dimensions are not the same so the operation is extended                                       |
| x[1:]                                                                                                                                                                                        | starting from index 1                                                                                                      |
| x[:1]                                                                                                                                                                                        | until 1 exclusive                                                                                                          |
| x[1:2]                                                                                                                                                                                       | inclusive 1 exclusive 2                                                                                                    |
| t.requires_grad                                                                                                                                                                              | Makes PyTorch track the steps needed to compute the gradients. Only float can have gradients                               |
| t.backward()                                                                                                                                                                                 | calculates the gradient for all tensors that have requires_grad                                                            |
| gradient on input                                                                                                                                                                            | indicates how much a change in x will affect y given the current input                                                     |
| device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")<br>x = x.to(device)                                                                                      | Always program independently of device                                                                                     |
| if torch.cuda.is_available():<br>    torch.cuda.manual_seed(42)<br>    torch.cuda.manual_seed_all(42)<br>torch.backends.cudnn.deterministic = True<br>torch.backends.cudnn.benchmark = False | Dont forget to seed the GPU even if it will be different for a different GPU architecture                                  |

## P02b Pytorch Example

Note that the number of epochs in model training is set always to 9. Run it like this, then increase the number of epochs and observe the changes in performance. What is the performance improvement increase if you go to 20 or 50 (or 100 if your PC allows it) epochs?

*Only when increasing it does the model learn well. Before, the accuracy is 48%, afterwards, an accuracy up to 100% can be achieved. 100 epochs is not necessary because the accuracy is already at 100% with 30 epochs.*

| concept                         | description                                                                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nn = MyModule(nn.Module)        | inherits from nn.Module                                                                                                                                                                                                               |
| pass                            | = do nothing                                                                                                                                                                                                                          |
| nn.(x)                          | calls forward due to inherited implementation                                                                                                                                                                                         |
| optimizer.zero_grad()           | PyTorch does not automatically replace the old gradients (stored on the model). backward() adds the new gradients to the old ones, for the case that a parameter occurs multiple time. Thus, set it to zero before calling backward() |
| optimizer.step()                | It takes the gradient that was stored by backward() in the model and updates the weight which is also stored in the model.                                                                                                            |
| state_dict = model.state_dict() | Can be used to save the model using torch                                                                                                                                                                                             |

###### Simple Neural Network
```python
class SimpleClassifier(nn.Module):
    def __init__(self, num_inputs, num_hidden, num_outputs):
        super().__init__()
        # Initialize the modules we need to build the network
        self.linear1 = nn.Linear(num_inputs, num_hidden)
        self.act_fn = nn.Tanh()
        self.linear2 = nn.Linear(num_hidden, num_output)

    def forward(self, x):
        # Perform the calculation of the model to determine the prediction
        x = self.linear1(x)
        x = self.act_fn(x)
        x = self.linear2(x)
        return x
```

Note: Lists of sub modules are only registered if you use nn.ModuleList

###### Simple Dataset
```python
class MyDataset(data.Dataset):
    def __init__():
	    super().__init__()
		# load and store the data somehow

    def __len__(self):
        return self.size

    def __getitem__(self, idx):
        # Return the idx-th data point of the dataset
        # Can be a touple like (data point and label)
        data_point = self.data[idx]
        data_label = self.label[idx]
        return data_point, data_label
```

###### Other Modules
- data_loader (torch.utils.data.DataLoader)
- loss_module (nn.xxx)
- optimizer (nn.optim.xxx)

###### Full training
```python
def train_model(model, optimizer, data_loader, loss_module, num_epochs=9):
    model.train() # Set model to train mode

    for epoch in tqdm(range(num_epochs)):
        for data_inputs, data_labels in data_loader:
            data_inputs = data_inputs.to(device)
            data_labels = data_labels.to(device)
            
            preds = model(data_inputs)
            # Output is [Batch size, 1], but we want [Batch size]
            preds = preds.squeeze(dim=1)

            loss = loss_module(preds, data_labels.float())
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
```


## P02c Neural networks: Activation functions, optimization, initial- ization

Run the tutorial P02c1 to see how just changing the activation function (ReLu or Sigmoid) affects the performance of a neural network. 

*Sigmoid runs with 89% accuracy and ReLU with 92% accuracy.*

Then run P02c to understand in more detail more why the choice of activation functions is important and how it affects learning.

*Prefer any of other option over sigmoid. For very deep networks -> prefer swish or similar over ReLU, which will have too many dead neurons.*

![](/assets/Pasted%20image%2020261015151155.png)

### P02d Optimization and Initialization

| initialization method                              | formula       |
| -------------------------------------------------- | ------------- |
| Equal variance to stabilize activations (for Tanh) | 1 / dx        |
| Equal variance to stabilize gradients (for Tanh)   | 1 / dy        |
| Xavier init to stabilize both (for Tanh)           | 2 / (dx + dy) |
| He/Kaiming initialization (for ReLU)               | 2 / dx        |
| He initialization + optimal backprop (for ReLU)    | 4 / (dx + dy) |
Use `torch.nn.init.calculate_gain` to find out the factor above the fraction

Optimizer Template
```python
class OptimizerTemplate:
    def __init__(self, params, lr):
        self.params = list(params)
        self.lr = lr

    def zero_grad(self):
        for p in self.params:
            if p.grad is not None:
                p.grad.detach_()
                p.grad.zero_()

    @torch.no_grad()
    def step(self):
        for p in self.params:
            if p.grad is None:
                continue
            self.update_param(p)
  
    def update_param(self, p):
        # To be implemented in optimizer-specific classes
        raise NotImplementedError
```

*All optimizers (SGD, SGDMometum, Adam) perform similarly well, but parameter could influence this. Adam is theoretically better at finding narrow minimum, SGD flat minimum. Flat minimum are theoretically better because they are more resistant to noise.*

*Remember: (Batch) Gradient descent = all samples in 1 batch, SGD = 1 sample per batch, MiniBatch = inbetween.*
### 3 Deep learning concepts and building blocks problems

**3.1** Take a simple feedforward neural network with only one input layer consisting of 2 neurons, one hidden layer with 3 neurons, and an output layer with 1 neuron. All neurons use a ReLU activation function. How would you manually calculate the output of this network given an input and the weights and biases for each neuron? 

Hint: Denote the input vector as $x = [x1, x2]$, the weights from the input layer to the hidden layer as $W1 = [[w11, w12], [w21, w22]]$, and denote similarly the biases according to their dimensionality. What do they look like for each layer?

The definition of the ReLU function is $f(x) = max(0, x)$.

*I would calculate it from inside out. The first layer is the innermost part of the whole model function. So first, I calculate $beta_0 + Omega_0 x_i$ That means weighting each input (twice) and adding the bias. Each of the elements in the resulting array is then put inside each of the 2 ReLU functions of the first layer, each input goes into the same ReLU with different weights. The same is repeated for the next layer.*

*Layer 1*
$h_1 = ReLU(beta_0 + (theta_11 * x_1 + theta_12 * x_2))$
$h_2 = ReLU(beta_0 + (theta_21 * x_1 + theta_22 * x_2))$

*Layer 2*
$h'_1 = ReLU(beta_1 + (psi_11 * h_1 + psi_12 * h_2))$
$h'_2 = ReLU(beta_1 + (psi_21 * h_1 + psi_22 * h_2))$
$h'_3 = ReLU(beta_1 + (psi_31 * h_1 + psi_32 * h_2))$

*End result*
$y' = RELU(beta_2 + (phi'_1 * h'_1 + phi'_2 * h'_2+ phi'_3 + h'_3)$

**3.2** Take a simple feedforward neural network with only one input layer consisting of 2 neurons, one hidden layer with 1 neuron, and an output layer with 1 neuron. All neurons use a sigmoid activation function. How would you manually calculate the output of this network given an input and the weights and biases for each neuron?

$y' = sig(beta_2 + psi_1 * sig(beta_1 + theta_1 * x_0 + theta_2 * x_1))$

**3.3** Consider a network with Di = 1 input, Do = 1 output, and K = 10 layers, with D = 10 hidden units in each. Would the number of weights increase more if we increased the depth by one or the width by one? Provide your reasoning

*Increasing depth by one: Adds $10 * 10$ more weights (the new layer has 100 weights and 10 biases)
Increasing width by one: Adds $(10 + 10 + 1) * 9 + 2 = 191$ more weights (between the 9 layers, there is 10 more weights to the new neuron, 10 more from the new neuron to the old and 1 more from the new to the new. the first and last layer get one more)
Adding width adds more weights than adding depth.*

**3.4** Consider a multivariate regression problem in which we predict the height of a person in meters and their weight in kilos from data x. Here, the units take quite different ranges. What problems do you see this causing? Propose some solutions to these problems

*At least at the start, since they might be at different scales, they dont contribute the same amount. Maybe that makes it harder to find the optimum. We could normalize the values so that they are in a similar range*

**3.5** Consider the task of training a deep neural network for a classification problem. You have the choice of using either Stochastic Gradient Descent (SGD) or Adam as the optimizer.

a) Briefly explain how each of these optimizers works, and how they update the model’s weights differently during training
*SGD uses batches of input values so that the outcome of the gradient descent is not entirely dependent on the starting point. For each batch, it calculates the gradient and updates the weights like this: $w = -alpha * "gradient"$. Adam also does that, but it also uses momentum, which means that part of the previous gradient direction stays in the new gradient direction. And Adam also adapts its step size based on first and second momentum. This way it doesnt overstep cliffs as much. 

b) Discuss the potential advantages and disadvantages of each optimizer, and under what circumstances you might choose to use each one.
*Adam doesnt overstep cliffs as much and is good with small narrow valleys. Potentially, SGD is better for finding flat valleys. Flat valleys are prefered because they generalize better. But if there is too steep terrain, Adam is potentially better. Since I dont have much experience, it doesnt matter which one I take. But I have been told that it is common to use Adam at the start and SGD at the end.*

c) Suppose you chose to use Adam for this task. What are the roles of the hyperparameters beta, gamma, and epsilon in the Adam optimizer, and how might changing these values affect the training process?
*beta: How much the first momentum influences the direction. So basically how smooth will it move. gamma: Same thing but for the second momentum. It will influence how quickly it reacts to gradient for adjusting the step size. epsilon: It is supposed to be a very small number to prevent division by zero so it should just be very small.*

### Additional Experiment

#### How much noise is fine for P02b?

| STD of XORDataset | Accuracy of the Model | Image                                            |
| ----------------- | --------------------- | ------------------------------------------------ |
| 0.1               | 100%                  | ![](/assets/Pasted%20image%2020261028173920.png) |
| 0.2               | 92.00%                | ![](/assets/Pasted%20image%2020261028174001.png) |
| 0.3               | 82.40%                | ![](/assets/Pasted%20image%2020261028174114.png)  |
| 0.4               | 74.40%                | ![](/assets/Pasted%20image%2020261028174200.png)  |
| 0.5               | 66.80%                | ![](/assets/Pasted%20image%2020261028174242.png)  |
| 0.6               | 63.00%                | ![](/assets/Pasted%20image%2020261028174353.png)  |
| 0.7               | 60.60%                | ![](/assets/Pasted%20image%2020261028174503.png)  |
| 0.8               | 59.00%                | ![](/assets/Pasted%20image%2020261028174539.png)  |
| 0.9               | 58.60%                | ![](/assets/Pasted%20image%2020261028174622.png)  |
| 1.0               | 58.00%                | ![](/assets/Pasted%20image%2020261028174742.png)  |

#### More activation functions for the 1000 images in P02c1

| Activation Function | Accuracy |
| ------------------- | -------- |
| ReLU                | 92%      |
| Sigm                | 89%      |
| Tanh                | 92%      |
| LeakyReLU           | 92%      |
| ELU                 | 92%      |
| SiLU                | 92%      |
