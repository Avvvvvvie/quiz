### Supervised Learning Pipeline
![|500x0](assets/Pasted%20image%2020251201155446.png)

### Univariate Linear Regression

Hypothesis $h_{\theta_0,\theta_1}(x)=\theta_0+\theta_1 x$

Prediction $\hat{y}=h_{\theta_0,\theta_1}(x^{(m)})=\theta_0+\theta_1 x$

Cost Function to minimize $J(𝜃_0,𝜃_1)=\frac{1}{2 M} \sum_{𝑚=1}^𝑀(𝑦^{(m)}−\hat{𝑦}^{(m)})^2 \tag{2.1}$

Loss (Residual Sum of Squares) $Sigma (y - hat y)^2$

$theta_0 = mu_y - theta_1 mu_x$

$\theta_1=\frac{\sum_{m=1}^M(x^{(m)}-\mu_x)(y^{(m)}-\mu_y)}{\sum_{m=1}^M(x^{(m)}-\mu_x)^2}= \frac{\tilde{s}_{xy}}{\tilde{s}_x^2} \tag{2.2}$

### Multivariate Linear Regression

${y} = {X} {\theta} + {\varepsilon}$

Normal Equation ${\theta} = ({X}^T {X})^{−1} {X}^T {y} \tag{2.3}$

$X = (1, "feature "1, ..., "feature "n; 1, ...,;...,,)$

### Polynomial Regression
$h_{\theta}(x) = \theta_0 + \theta_1 x + \theta_2 x^2 + \theta_3 x^3$
$z_1 = x, z_2 = x^2$
$h_{\theta}(z) = \theta_0 z_0 + \theta_1 z_1 + \theta_2 z_2 + \theta_3 z_3$

### Basic Assumptions in Linear Regression
1. Linearity: The relationship between X and y is linear.
2. Independence: The residuals are independent of each other.
3. Normality: The expected output values are normally distributed.
4. Homoscedasticity (equality of variance): The variance of the residual is the same for any value of X. (Example: Fan Pattern)

![](/assets/Pasted%20image%2020251209143449.png)
### Evaluating Regression Models
Mean absolute error = $\frac{\sum_{𝑖=1}^𝐼|𝑦^{(i)}−\hat{𝑦}^{(i)}|}{𝐼}$
Mean square error = $\frac{\sum_{𝑖=1}^𝐼(𝑦^{(i)}−\hat{𝑦}^{(i)})^2}{𝐼}$
Root mean squared deviation = $\sqrt{MSE}=\sqrt{\frac{\sum_{𝑖=1}^𝐼(𝑦^{(i)}−\hat{𝑦}^{(i)})^2}{𝐼}}$

$𝑅^2=1−\frac{𝑆𝑆_{\text{res}}}{𝑆𝑆_{\text{tot}}}$ measures the fraction of the variance of the data which can be explained by the model

$𝑆𝑆_{\text{res}}=\sum_i (y^{(i)} -\hat{y}^{(i)})^2=\sum_i {\varepsilon^{(i)}}^2$ = amount of variability in Y not explained

$𝑆𝑆_{\text{tot}}=\sum_i (y^{(i)} - \mu_y)^2$ = total variability

If the model always predicts the mean: R2 = 0
Best: R2 = 1
### Regularization

$J(\theta) = \frac{1}{2 M} \left[ \sum_{𝑚=1}^𝑀(𝑦^{(m)}−h_{\theta}(x^{(m)}))^2 + \lambda \sum_{j = 1}^{n} \theta_j^2 \right] \tag{4.1}$

Higher lambda = lower theta = less overfitting
### Gradient Descent
For n parameters: $\theta_j = \theta_j - \alpha \frac{\partial}{\partial \theta_j}J(\theta)\quad \; \forall j = 0, ... n \tag{3.1}$

Decay $\alpha_t = \frac{1}{1 + decay\_rate * t}\alpha_0$ (t = epoch number)

For univariate linear regression: $theta_j = theta_j - alpha 1 / M Sigma_(i=1)^M (h_(theta)(x^((i))) - y^((i))) x_j^((i))$

$\text{Update} \: \theta_0 = \theta_0 - \alpha \frac{1}{M} \sum_{m=1}^{M}(h_{\theta}(x^{(m)}) - y^{(m)})$
$\text{Update} \: \theta_1 = \theta_1 - \alpha \frac{1}{M} \sum_{m=1}^{M}(h_{\theta}(x^{(m)}) - y^{(m)})x^{(m)} \tag{3.2}$

Batch GD = use all samples ($x^((i))$) per update. Stochastic: use 1 sample after another. Mini batch: use x samples each time
### Logistic Regression
Logistic Sigmoid $g(z) = \frac{1}{1 + e^{-z}}$, $\frac{\partial}{\partial z} g(z) = g(z) (1 - g(z))$
Unidimensional $\hat{y} = h_\theta(x) = g(\theta_0+ \theta_1 x) = \frac{1}{1 + e^{-(\theta_0 + \theta_1 x)}}$
Multidimensional $\hat{y} = h_{\boldsymbol{\theta(x)}} = g({\boldsymbol{\theta}}^T \boldsymbol{x}) = \frac{1}{1 + e^{-{\boldsymbol{\theta}}^T \boldsymbol{x}}}$
$\textrm{Log-Loss}(h_\theta(x), y) = -y \log(h_\theta(x)) - (1 - y) \log(1 - h_\theta(x))$

$\textrm{Log-Loss} = -y \log(p) - (1 - y) \log(1 - p)$

$L_{logistic}=-\sum_{m=1}^{M}[y^{(m)}log(\hat{y}^{(m)})+(1-y^{(m)})log(1-\hat{y}^{(m)})]$

Cost Function $J(\theta) = \frac{1}{M} \sum_{m=1}^M \textrm{Loss}(h_\theta(x^{(m)}), y^{(m)})$
### Multi-class Classification
![](/assets/Pasted%20image%2020251211114510.png)

Cost Function $L_{CE}=-\sum_{m=1}^{M}\sum_{k=1}^{K}y^{(m)}_k log(\hat{y}^{(m)}_k)=-\sum_{m=1}^{M}log\frac{\exp{(\mathbf{w}^T_{c_m}\mathbf{x}^{(m)})}}{\sum_{k=1}^{K}\exp{(\mathbf{w}^T_k\mathbf{x}^{(m)})}}$

### Sensitivity to ...
- Linear Regression: Outliers
- Logistic Regression: -
- Decision Trees: Change
- SVM: Scale
- Hard SVM: Individual samples, Outliers
- KMeans: outliers

### Evaluating Classification
$\text{Accuracy} = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}} = \frac{1}{M}\sum_{m=1}^M I(y^{(m)} = \hat{y}^{(m)}) \tag{6.1}$
$= \frac{TP + TN}{TP + TN + FP + FN} \tag{6.2}$

![|0x300](/assets/Pasted%20image%2020251211124700.png)
$\text{Precision} = \frac{TP}{TP + FP} \tag{6.3}$ = correct positives

$\text{Recall} = \frac{TP}{TP + FN} \tag{6.4}$ = correctly identified positives

$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}} = \frac{2TP}{2TP + FP + FN} \tag{6.5}$

$\text{Specificity} = \frac{TN}{TN + FP} \tag{6.6}$ = correctly identified negatives

False positive Rate $1 - \text{Specificity} = \frac{FP}{TN + FP}$

high recall = many missed positives

MAE, MSE, RMSE, R2

Multiclass Evaluation with Averaging:
- $\text{Precision}_{\text{macro}} = \frac{1}{K}\sum_{k=1}^K \text{Precision}_k \tag{6.7}$
- $\text{Precision}_{\text{micro}} = \frac{\sum_{k=1}^K TP_k}{\sum_{k=1}^K (TP_k + FP_k)} \tag{6.8}$

### Data Partitioning
- **Training set**: Used to fit model parameters (60-70% of data)
- **Validation set**: Used for hyperparameter tuning and model selection (15-20% of data)
- **Test set**: Used only for final performance evaluation (15-20% of data)
Stratified Splitting = Have the same proportion of classes in each set.

### Validation techniques
- K-Fold: Each time, a different set is used for testing
- Leave-One-Out Cross Validation: k-Fold with k=M (good but computationally expensive)
- Stratified K-Fold
- Grid Search: tries all combinations of hyperparameter values from a predefined grid
- Nested Cross Validation: Outer loop: K-fold cross validation for performance estimation. Inner loop: For each outer fold, perform grid search with cross validation to select hyperparameters

### Bias - Variance
**Bias** = how far the average prediction of our model is from the correct value. High bias = underfitting, too simple model

**Variance** = how much the predictions vary for different training sets. High variance = overfitting

**Irreducible error** = noise, cannot be reduced by any model

![](/assets/Pasted%20image%2020251211131759.png)

### Neural Networks
one-hot encodeing = [0,1,0,0...]

$softmax(\mathbf{z})_k=\dfrac{\exp{(z_k)}}{\sum_{i=1}^{K}\exp{(z_i)}}$

Cross-Entropy / Softmax Loss $\textrm{Loss}(\hat{\mathbf{y}}^{(m)}, \mathbf{y}^{(m)}) = - \sum_{k=1}^{K}{y_k^{(m)} \log(\hat{y}_{k}^{(m)})}$

CE Cost Function $J(\mathbf{W}) = \frac{1}{M} \sum_{m=1}^M \textrm{Loss}(\hat{\mathbf{y}}_{m}, \mathbf{y}_m).$

Output layers
- Linear Regression: Weighted Sum
- Logistic Regression: Sigmoid
- Multiclass: Softmax

$\hat{y}=f[x, \mathbf{\phi}]=b_{0}^{(2)}+w_{00}^{(2)} \zeta[b_{0}^{(1)} + w_{00}^{(1)}x] + w_{01}^{(2)} \zeta[b_{1}^{(1)}+w_{10}^{(1)}x] + w_{02}^{(2)} \zeta[b_{2}^{(1)}+w_{20}^{(1)}x]$
![|0x300](/assets/Pasted%20image%2020251212105219.png)

Universality theorem = NN with one hidden layer using nonlinear activation function ~ any continuous function

Computation Graph:
![|0x300](/assets/Pasted%20image%2020251212105704.png)
$\frac{\partial C}{\partial w^{(L)}} = \frac{\partial C}{\partial a^{(L)}} \cdot \frac{\partial a^{(L)}}{\partial z^{(L)}} \cdot \frac{\partial z^{(L)}}{\partial w^{(L)}}$

vanishing/exploding gradient problem = multiuplication makes result too small/big
![](/assets/Pasted%20image%2020251212111354.png)
### Prevent Overfitting NNS
- Dropout neurons
- Early stopping after x epochs
- Data augmentation

Epoch = all batches done

![](assets/Pasted%20image%2020251212110132.png)
![](assets/Pasted%20image%2020251212110138.png)

### Support Vector Machines
Hyperplane $b + w_1 x_1 + w_2 x_2 = 0 \tag{8.1}$

Hard Margin $f(\mathbf{x}^{\ast})= \hat{b} + \hat{\mathbf{w}}^T\mathbf{x}^{(\ast)}$
$\text{subject to} \ y^{(m)}\left(b + \mathbf{w}^T\mathbf{x}^{(m)} \right) \geq 1 \ \forall \ m=1,\dots,M \tag{8.8}$

Soft Margin $\underset{b, \mathbf{w}, \mathbf{\epsilon}}{\text{min}}\frac{1}{2}||\mathbf{w}||^2 + C \sum_{m=1}^M\epsilon_m  \tag{8.9}$
$\text{subject to }\epsilon_m \geq0, \ y^{(m)}\left( b + \mathbf{w}^T\mathbf{x}^{(m)} \right) \geq 1-\epsilon_m \tag{8.10}$

small C = wide margin allowing many outliers
infinite c = hard margin

Radial Basis Function Kernel $mathcal{K}\left(\mathbf{x}^{(m)},\mathbf{x}^{(m')}\right)=\exp\left(-\gamma ||\mathbf{x}^{(m)} -\mathbf{x}^{(m')}||^2 \right), \tag{8.16}$
(higher gamma = lower variance = smaller spread/margin and only in the immediate surrounding of each sample)

### Decision Trees
Gini $G\left(Q_i\right)=1-\sum_{k=1}^K p_{i,k}^2 \tag{9.1}$ with $p_{ik} = \frac{1}{M_i}\sum_{y\in Q_i} I(y=k)$ = proportion of class i

Cost Function = Weighted Gini = Gini * Child/Parent Proportion

Information gain = Parent Gini - Child Gini

Entropy $H\left(Q_i\right)=-\sum_{k=1}^K p_{i,k} \log_2 p_{i,k} \tag{9.2}$

Small Amount of Samples -> Try each, choose smalles Gini

Regression: MSE, prediction = mean

Pre-Pruning (against overfitting)
- Min-Sample Pruning: Only split nodes with at least k samples
- Max-Depth Pruning: Restrict the maximum depths of the tree
Post-Pruning: Use validation data to decide for each leaf whether it is "reasonable"

Random Forests: Bagging, Aggregating, Random Feature Selection

### Probabilistic Models
$P(A \mid B) = \frac{P(B \cap A)}{P(B)}$

Bayes Theorem $P(A \mid B) = \frac{P(A) \cdot P(B \mid A)}{P(B)}$

Max Likelyhood Estimation $\theta_{\text{MLE}} = \underset{\theta}{\text{argmax}} \ P(X | \theta)$
Neg Log Lieklihood $NLL(p; X) = -7log(p) - 3log(1-p)$

Max a posteriori $\theta_{\text{MAP}} = \underset{\theta}{\text{argmax}} \ P(\theta | X) = \underset{\theta}{\text{argmax}} \  \frac{P(X | \theta) \cdot P(\theta)}{P(X)}$
where $P(\theta)$ = prior probability

### Clustering
soft clustering = each point gets a probability

**K Means**
- k initial centroids (random/partition/forgery/probability=distance to last c)
- for each centroid
	- $A_k$ = set of data points currently assigned to $c_k$ ($distance(p,q)=\sqrt{\sum_{i = 1}^{N} (q_{i} - p_{i})^{2}}$)
	- $m_k = \frac{1}{|A_k|}\sum_{x^{(m)} \in A_k} x^{(m)}$ (Mean of $A_k$)
	- $c_k = m_k$

Quality check $\Phi(C, X) = \sum_{m = 1}^{M} min_{c \in C} (d(x^{(m)}, c)^{2})$

Elbow method => number of clusters

Silhuette score $\frac{1}{M}\sum_{m=1}^{M} \frac{b_m-a_m}{max(b_m, a_m)}$ where $b_m$ = smallest avg dist to any other cluster $a_m$ = avg within. high = good

**DBSCAN**
- select unprocessed
- if minPts in distance $epsi$ to core point
- if 1pt then border point
- all neighbors belong to group

Manhattan Distance $d_1(p,q)=\sum_{i}|p_i-q_i|$
