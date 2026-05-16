[Skript](https://phonosync.github.io/mldm-notes/)

[Praktikum](https://github.com/zhaw-physical-ai/MLDM_HS2025/tree/main)

[Google Colab Tips](https://amitness.com/posts/google-colab-tips)

Bei x Eigenschaften und einem nächsten Layer von y Neuronen
x * y + y
x features * next layer of nodes + laayer of nodes (=bias)

### What are the 3 Machine Learning Paradigms?
1. Supervised Learning (regression, classification)
2. Unsupervised Learning (clustering, anomalies, dimension reduction)
3. Reinforcement Learning

### Whats the goal of Supervised Learning?
The goal ist to model the underlying Distribution of the data, in order to explain data and apply it to new data.

### What is the notation of the 3rd feature of the 4th sample in supervised learning?
$x^((4))_3$

### Whats the goal of Unsupervised Learning?
Finding structure in data without predefined labels.

### What are the typical steps of a data science project?
1. Collect Data
2. Understand Data
3. Prepare Data
4. Train Model
5. Evaluate
6. Deploy and Monitor

### How does the normal equation look like?
$theta=(X^T X)^(−1) X^T y$

Theta and y are vectors, X is a matrix. Each value in theta corresonds to a feature in X.
### What is the use of the normal equation?
It is used to diretly calculate the parameters of a multivariate linear regression. Drawback: Matrix-Inversion is too expensive for a large amount of data.

### What are the 4 assumptions made about the input of linear regression?
1. Its linear
2. The samples are independent of each other
3. Errors are normally distributed
4. The variance is the same over all samples

### Why is the normal equation not used much anymore?
Because inverting matrices is computationally expensive.

### What is a hyperparameter?

### What is Regularisation?
The magnitudes of the cost functions can be held low with regularization. For this, a hyperparameter lambda is introduced. Higher lambda = lower magnitudes.

### How is the total model error calculated?
$"Error" = "bias"^2 + "variance" + "noise"$

### What are bias and variance?
**Bias** = how far the average prediction of our model is from the correct value. High bias = underfitting, too simple model

**Variance** = how much the predictions vary for different training sets. High variance = overfitting

### How can you see if you overfitted your data?
When there are few errors with the training samples but a lot of errors with the test samples.

### What is Logistic Regression?
The goal is to split the data into two classes, each getting a probability of belonging to the positive class.

### How is Odds calculated?
$(P(Y = 1)) / (1 - P(Y = 1))$

### How is Logit calculated?
$log("Odds") = log( (P(Y = 1)) / (1 - P(Y = 1)) )$

### What is the Sigmoid function?
The inverse of the Logit. It gives the probability of all values.

$g(z) = 1 / (1 + e^-z)$

### Why does logistic regression not use mean square but log for its loss function?
Because the probabilities can get too small to compute when they are squared.

### How can you know the accuracy of logistic regression?
With the percentage of correct answers.

### What are the drawbacks of Bag of Words?
- Computationally expensiev for a large amount of words
- No ordering of the words

### What is the difference between Precision and Recall?
Precision: What % of detected positives is correct? (True Positives / True+False Positives)

Recall: What % of all positives is correct? (True Positives / True Pos + False Neg)

### What is $F_1$?
With $F_1$, both recall and precision can be summed up in one metric. A weight $beta$ can customize the metric more:

$2 ("precision" * "recall") / ("precision" + "recall")$ $" or " (1 + beta^2) ("precision" * "recall") / (beta^2 * "precision" + "recall")$

### What makes up a neuron?
sum & activation function

### A neural network has k hidden layers and p neurons. How many weights does the network have? (All layers have the same size)
$p^2 * (k + 1) + p * (k + 1)$

### What is the Vanishing Gradient Problem?
= when the multiplication of the partial derivatives in the neural network backpropagation makes the result too small to compute. (happens when all multiplicands are below 1)

### What is the Exploding Gradient Problem?
= when the multiplication of the partial derivatives in the neural network backpropagation makes the result too large to compute. (happens when all multiplicands are large numbers)

### What is the Dropout technique?
You deactivate a Percentage of your Neurons and all their connections. These changes in each iteration. This way you are forcing every Neuron to learn something. This reduces overfitting.

### What is the early stopping technique?
You stop before the Model has overfitted the training data. This is done by evaluating the model periodically during training.

### What is the data augmentation technique?
You increase the size and diversity of training data. This depends on the case. With images, you can change colors or flip/rotate/cut them. Text can be changed with synonyms or translated in different languages.

### What is the goal of the maximal margin classifier?
To put a hyperplane between two classes so that the space between the two closest points to the plane is as large as possible.

### What are support vectors?
The points closest to the hyperplane which is seperating 2 classes.

### You have a maximal margin classifier model and use it to predict the class of a new sample. What does the output value tell you about the class?
The class depends on the sign of the result. The absolute value tells you the certainty.

### Why does data for a maximal margin classifier need to be standardized?

### What does a soft margin classifier allow that a hard one doesnt?
- Points within the margin
- Points on the other side of the hyperplane

### What does the hyperparameter C control in a soft margin classifier?
How large the sum of the slack can be

### What happens to the margin of a soft margin classifier with small C?
The margin will be large and more error is allowed.

### What happens to the margin of a soft margin classifier with large C?
Less error is allowed so the margin wil not be that large.

### What does the kernel trick achieve?
You can do non-linear classification boundaries with it, without needing to manually find a transformation to a fitting dimension in which it would be seperatable with a linear hyperplane.

### What is the principle of the Kernel Trick?
Instead of transforming th einput to a higher dimension and then calculating the scalar, the scalar product of the original feature vectors and then squared to get the same result. This results in much fewer and more efficient computations.

You map your input to a higher dimension where it can be seperated by a hyperplane. This is useful if it cant be seperated in the original input.

### What does a small gamma do for a RBF Kernel?
Smaller gamma = larger variance = larger Margin. Samples further away will have more influence.

### How can multiclass classification be done with a maximal margin classifier?

### How is the gini score of a node calculated?
$1 - Sigma("proportion of class i")^2$

### What does the gini impurity quantify?
It quantifies the misclassification probability.

### How is Entropy calculated?
$- Sigma("proportion of class i" * log_2("proportion of class i"))$

### What possibilites can be used to regularize a decision tree?
- Dont split if a node doesnt have a lot of samples
- Limit tree depth
- Post pruning: Cut off unnecesary leafs (based on errors made in the testing data)

### What are the advantages of decision trees?
- Easy to understand and interpret
- Works with mixed feature types
- No normalization needed
- Can address (multiclass) classification and regression tasks

### What are the disadvantages of decision trees?
- Easily overfits
- Not robust when small changes are made

### What is bagging?
You create multiple training sets (bags) that use slightly different samples. Then you train a different decision tree for each bag. In the end, the individual predictions are aggregated.

### P(B|A) = ?
P(B and A) / P(A)

### What is Bayes Theorem?

### What is the difference between supervised and unsupervised Learning?
unsupervised = without Labels

### What are the 4 goals of clustering?
- Data understanding (find natural clusters)
- Data class identification (find suitable groupings)
- Data reduction (find representatives for each cluster)
- Outlier detection

### What is the Manhattan Distance?

### What is the Forgy method?
It is a way to initialize the K-Means Clusters by choosing K random points from the training set.
### What is the Elbow Method?

### What 3 types of points are considered in DBSCAN?
- Core points (has at least x points within distance y)
- Border Points (has a core point within distance y)
- Noise Points (is none of the above)

### How does a change in epsilon affect DBSCAN?
WIth a larger epsilon: Clusters merge and there are fewer noise points. If epsilon is too large, DBSCAN may produce one giant cluster. If epsilon is too small, almost everything is labeled as noise.

### How does a change in minPts affect DBSCAN?
Larger minPts: Fewer, denser clusters and more outliers in sparse regions. It gives high confidence clusters, aka the clusters are less likely to be from noise.

### What are the advantages of DBSCAN?
- No need to specify the number of clusters
- Finds arbitrarily shaped clusters
- Can detect noise

### What is the disadvantage of DBSCAN?
It cannot cluster data sets with large differences in densities. (Example: One area has a low density, the other high. But your hyperparameters can only be optimal for one)

### What is the Silhuette Score?

### What Silhuette Score is considered good?
0.3 - 0.5 is decent, higher is even better.


### ![](/assets/Pasted%20image%2020251209143755.png)
A and B

### Which one has the lowest value of the regularisation parameter $lambda$? ![](assets/Pasted%20image%2020251210150702.png)
a)

### What happens if we set the regularization parameter $lambda$ to a very large value, e.g. $lambda$ = 10'000'000?
Then all parameters $theta_j$ will be close to or equal to zero, except for $theta_0$. Thus, we obtain a horizontal line

### ![](/assets/Pasted%20image%2020251210152556.png)
D

### What happens if we set b = 1 in Mini-batch Gradient Descent?
We get stochastic gradient descent

### What happens if we set b = M in Mini-batch Gradient Descent?
We get batch gradient descent

### ![](/assets/Pasted%20image%2020251210153422.png)
![](/assets/Pasted%20image%2020251210153435.png)

### Is Logistic Regression used for Regression or Classification?
Classification

### Is SVM used for Regression or Classification?
Both

### Is NNs used for Regression or Classification?
Both

### Is Decisions Trees used for Regression or Classification?
Both

### Is Linear Regression used for Regression or Classification?
Regression
### What are validation sets used for?

### How is bias calculated?

### How is variance calculated?

### Match the parameters A-C to the Graphs 1-3 ![](/assets/Pasted%20image%2020251211132309.png)
A. 1

B. 3

C. 2

### Which hyperplane is the best? ![](/assets/Pasted%20image%2020251214181439.png)
Number 3

### What is Stratified Splitting?
It ensures that each subset (train, validation, test) has approximately the same proportion of samples from each class as the original dataset.

### What is the lower and upper bound of R2?

There is no lower bound. The upper bound is <= 1

### How is Regression done with a SVM?
Instead of trying to fit the largest possible street between two classes while limiting margin violations, SVM regression tries to fit as many instances as possible on the street while limiting margin violations. The width of the street is controlled by a hyperparameter, epsilon.

### What is the difference between a discriminative and a generative model?
Discriminative models: Directly calculate decision boundaries and where new samples fall. (Without modeling the individual distributions)

Generative models: Calculate the probabilities of the features belonging to a class.