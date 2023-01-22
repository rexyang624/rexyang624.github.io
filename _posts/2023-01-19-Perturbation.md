---
usemathjax: true
layout: page
title:  Perturbation theory
permalink: /notes/perturbation/
description: 01/19/2023
---
<div id="date" style="text-align: right"> last updated on {{ "now" | date: "%m/%d/%Y" }} </div>

Suppose the full Hamiltonian is given as $ \mathcal{H}=\mathcal{H}_0+\mathcal{H}_1 $, where the eigenstate of the full Hamiltonian is $ \|\Psi\rangle $ with the eigenvalue $$E$$, and the eigenstate of the unperturbed Hamiltonian $$\mathcal{H}_0$$ is $\|\Phi\rangle$ with the eigenvalue $W$. Then we have
$$
\begin{align}
    (\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle=E|\Psi\rangle.\label{eqn:fullH}
\end{align}
$$
If we normalize $ \|\Phi\rangle $ to $1$, we can also normalize $ \|\Psi\rangle $ by letting $\langle \Psi | \Phi \rangle=1$. Then by multiplying $\langle \Psi\|$ to the both sides of (\ref{eqn:fullH}) , we get
$$
\begin{align}
    \langle\Psi|(\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle=E\langle\Psi|\Psi\rangle\label{eqn:findE}.
\end{align}
$$
We insert $1=P+\|\Phi\rangle\langle\Phi\|$ (with the definition $P \equiv 1-\|\Phi\rangle\langle\Phi\|$) into (\ref{eqn:findE}), and we obtain
$$
\begin{align}
    \langle\Psi|(P+|\Phi\rangle\langle\Phi|)(\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle&=E\langle\Psi|\Psi\rangle\nonumber\\
    \langle\Psi|(|\Phi\rangle\langle\Phi|)(\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle&=E\langle\Psi|(1-P)|\Psi\rangle\nonumber\\
    W+\langle \Phi|\mathcal{H}_1|\Psi\rangle &=E,\label{eqn:E}
\end{align}
$$
by using $\langle \Psi | \Phi \rangle=1$.

Next, we can multiply $P$ to the both sides of (\ref{eqn:fullH}), and we get
$$
\begin{align}
    P(\mathcal{H}_0+\mathcal{H}_1)|\Psi\rangle&=EP|\Psi\rangle\nonumber\\
    P\mathcal{H}_1|\Psi\rangle&=P(E-\mathcal{H}_0)|\Psi\rangle\nonumber\\
    P\mathcal{H}_1|\Psi\rangle&=(E-\mathcal{H}_0)|\Psi\rangle-(E-W)|\Psi\rangle\nonumber\\
    (E-W)|\Psi\rangle+P\mathcal{H}_1|\Psi\rangle&=(E-\mathcal{H}_0)|\Psi\rangle.
\end{align}
$$
Note $(E-\mathcal{H}_0)^{-1}\|\Phi\rangle =(E-W)^{-1}\|\Phi\rangle$ [[^1]], so we find
$$
\begin{align}
    |\Psi\rangle = |\Phi\rangle+ (E-\mathcal{H}_0)^{-1}P\mathcal{H}_1|\Psi\rangle.\label{eqn:psi}
\end{align}
$$

Now we have the recursive relations of the eigenstate (\ref{eqn:psi}) of the full Hamiltonian and its corresponding eigenvalues (\ref{eqn:E}). We can also insert (\ref{eqn:psi}) iteratively into (\ref{eqn:E}), and we obtain
$$
\begin{align}
    E=&W+\langle \Phi|\mathcal{H}_1|\Phi\rangle+\langle \Phi|\mathcal{H}_1(E-\mathcal{H}_0)^{-1}P\mathcal{H}_1|\Phi\rangle\nonumber\\&+ \langle \Phi|\mathcal{H}_1(E-\mathcal{H}_0)^{-1}P\mathcal{H}_1(E-\mathcal{H}_0)^{-1}P\mathcal{H}_1|\Phi\rangle+\dots
\end{align}
$$
This is the __Brillouin-Wigner expansion__.


[^1]: This can be understood from the spectrum decomposition of an operator.