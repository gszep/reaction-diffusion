from numpy import argmax,triu,sqrt
from numpy.random import multinomial
from scipy.linalg import eigh

def interaction(n,p):
    """Symmetric real n x n sparse random matrix, with
    zero mean and nonzero elements sampled with
    probability p.

    --- Parameters ---
    int n : Size of matrix
    float p : Probability of nonzero elements

    --- Returns ---
    array (n) : Eigenvalues of random matrix
    array (n,n) : Random matrix
    """

    X = argmax( multinomial(1,[p/2,1-p,p/2],size=(n,n)), axis=-1) - 1
    J = (triu(X)+triu(X,k=1).T)/sqrt(4*n*p)
    return eigh(J,eigvals_only=True),J
