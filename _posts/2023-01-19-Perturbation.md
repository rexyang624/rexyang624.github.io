---
usemathjax: true
layout: page
title:  Perturbation theory
permalink: /notes/perturbation/
description: 01/19/2023
---
<div id="date" style="text-align: right"> last updated on {{ "now" | date: "%m/%d/%Y" }} </div>

## Brillouin-Wigner expansion
&emsp;&emsp;Suppose the full Hamiltonian is given as $ \mathcal{H}=\mathcal{H}_0+\mathcal{H}_1 $, where the eigenstate of the full Hamiltonian is $ |\Psi\rangle $ with the eigenvalue $E$, and the eigenstate of the unperturbed Hamiltonian $\mathcal{H}_0$ is $|\Phi\rangle$ with the eigenvalue $W$. Then we have
$$
\begin{align}
    (\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle=E|\Psi\rangle.\label{eqn:fullH}
\end{align}
$$
If we normalize $ |\Phi\rangle $ to $1$, we can also normalize $|\Psi\rangle $ by letting $\langle \Psi | \Phi \rangle=1$. Then by multiplying $\langle \Psi|$ to the both sides of (\ref{eqn:fullH}) , we get
$$
\begin{align}
    \langle\Psi|(\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle=E\langle\Psi|\Psi\rangle\label{eqn:findE}.
\end{align}
$$
We insert $1=P+|\Phi\rangle\langle\Phi|$ (with the definition $P \equiv 1-|\Phi\rangle\langle\Phi|$) into (\ref{eqn:findE}), and we obtain
$$
\begin{align}
    \langle\Psi|(P+|\Phi\rangle\langle\Phi|)(\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle&=E\langle\Psi|\Psi\rangle\nonumber\\
    \langle\Psi|(|\Phi\rangle\langle\Phi|)(\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle&=E\langle\Psi|(1-P)|\Psi\rangle\nonumber\\
    W+\langle \Phi|\mathcal{H}_1|\Psi\rangle &=E,\label{eqn:E}
\end{align}
$$
by using $\langle \Psi | \Phi \rangle=1$.

&emsp;&emsp;Next, we can multiply $P$ to the both sides of (\ref{eqn:fullH}), and we get
$$
\begin{align}
    P(\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle&=EP|\Psi\rangle\nonumber\\
    P\mathcal{H}_1|\Psi\rangle&=P(E-\mathcal{H}_0)|\Psi\rangle\nonumber\\
    P\mathcal{H}_1|\Psi\rangle&=(E-\mathcal{H}_0)|\Psi\rangle-(E-W)|\Psi\rangle\nonumber\\
    (E-W)|\Psi\rangle+P\mathcal{H}_1|\Psi\rangle&=(E-\mathcal{H}_0)|\Psi\rangle.
\end{align}
$$
Note $(E-\mathcal{H}_0)^{-1}|\Phi\rangle =(E-W)^{-1}|\Phi\rangle$ [[^1]], so we find
$$
\begin{align}
    |\Psi\rangle = |\Phi\rangle+ (E-\mathcal{H}_0)^{-1}P\mathcal{H}_1|\Psi\rangle.\label{eqn:psi}
\end{align}
$$

&emsp;&emsp;Now we have the recursive relations of the eigenstate (\ref{eqn:psi}) of the full Hamiltonian and its corresponding eigenvalues (\ref{eqn:E}). We can also insert (\ref{eqn:psi}) iteratively into (\ref{eqn:E}), and we obtain
$$
\begin{align}
    E=&W+\langle \Phi|\mathcal{H}_1|\Phi\rangle+\langle \Phi|\mathcal{H}_1(E-\mathcal{H}_0)^{-1}P\mathcal{H}_1|\Phi\rangle\nonumber\\&+ \langle \Phi|\mathcal{H}_1(E-\mathcal{H}_0)^{-1}P\mathcal{H}_1(E-\mathcal{H}_0)^{-1}P\mathcal{H}_1|\Phi\rangle+\dots
\end{align}
$$
This is the __Brillouin-Wigner expansion__.
## Raleigh-Schrödinger expansion

## Series expansion approach
Suppose the perturbed Hamiltonian $\mathcal{H}_1=\lambda V$, where the parameter $\lambda$ determines the strength of the perturbation. Then we can expand the eigenvalues and the eigenvectors in terms of the series expansion of $\lambda$. If we look at the unperturbed ground state $|0 \rangle$ with eigenvalue $E_0$, we have corrected eigenvalue and eigenvector
$$
\begin{align}
E&=\sum_{r=0}^\infty \lambda^r E_r,\label{eqn:E-expansion}\\
|\Psi\rangle&=\sum_{r=0}^\infty \lambda^r |\Psi_r\rangle,\label{eqn:Psi-expansion}
\end{align}
$$
where $|\Psi_r\rangle$ at different orders are orthogonal to $|0\rangle$. Next we can insert (\ref{eqn:E-expansion}) and (\ref{eqn:Psi-expansion}) into the Schödinger equation $(\mathcal{H}_0+\lambda V)|\Psi\rangle=E|\Psi\rangle$, and by collecting terms at the same order of $\lambda^n$, we have
$$
\begin{align}
    (\mathcal{H}_0-E_0)|\Psi_n\rangle+V|\Psi_{n-1}\rangle=\sum_{r=0}^{n-1}E_{n-r}|\Psi_r\rangle.\label{eqn:lambda-collected}
\end{align}
$$
Applying $\langle 0|$ to both sides of the equation (\ref{eqn:lambda-collected}), we get
$$
\begin{align}
    E_n=\sum_{k\neq 0}\langle 0 |V|k\rangle\langle k|\Psi_{n-1}\rangle=\sum_{k\neq 0}V_{0,k}c_{k,n-1},
\end{align}
$$
where we denote $V\_{i,j}=\langle i | V | j \rangle$ and $c\_{i,j}=\langle i|\Psi_j\rangle$. The coefficients $c\_{i,j}$ are found by applying various other eigenstates $\langle k\neq0|$ of $\mathcal{H}_0$ to (\ref{eqn:lambda-collected}) again, and we obtain
$$
\begin{align}
    c_{k,n}=\frac{1}{E^{(k)}-E_0}\left(-\sum_{j}V_{kj}c_{j,n-1}+\sum_{s=0}^{n-1}E_{n-s}c_{k,s}\right),\label{eqn:overlap}
\end{align}
$$
with $E^{(k)}$ denoting the eigenvalue of $|k\rangle$.
Notice $c\_{i,j}$ at the right hand side of the equation (\ref{eqn:overlap}) only appears up to the order $j=n-1$. Therefore, we can compute $c\_{i,j}$ recursively from the lowest order. 

### References
0. David J. Thouless, *The Quantum Mechanics of Many-Body Systems*, (Dover Publications; Second Edition, 2014).
0. Jaan Oitmaa, Chris Hamer, and Weihong Zheng, *Series Expansion Methods for Strongly Interacting Lattice Models*, (Cambridge University Press, 2010).


[^1]: This can be seen from the spectrum decomposition of an operator.