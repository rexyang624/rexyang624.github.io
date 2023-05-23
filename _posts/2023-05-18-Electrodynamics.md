---
usemathjax: true
layout: page
title:  Notes for electrodynamics of solids
permalink: /notes/electrodynamics/
description: 05/18/2023
---
## Vector calculus identity
$$
\begin{align}
    &\nabla\times(\nabla\phi)=0\\
    &\nabla\cdot(\nabla\times\mathbf{A})=0\\
    &\nabla\cdot(\phi \mathbf{A})=\phi\nabla\cdot\mathbf{A}+\mathbf{A}\cdot\nabla\phi\\
    &\nabla\cdot(\mathbf{A}\times\mathbf{B})=(\nabla\times\mathbf{A})\cdot\mathbf{B}-(\nabla\times\mathbf{B})\cdot\mathbf{A}\\
    &\nabla\times(\phi\mathbf{A})=\phi(\nabla\times\mathbf{A})+(\nabla\phi)\times\mathbf{A}\\
    &\nabla\times(\mathbf{A}\times\mathbf{B})=\mathbf{A}(\nabla\cdot\mathbf{B})-\mathbf{B}(\nabla\cdot\mathbf{A})+(\mathbf{B}\cdot\nabla)\mathbf{A}-(\mathbf{A}\cdot\nabla)\mathbf{B}\\
    &\nabla\times(\nabla\times\mathbf{A})=-\nabla^2\mathbf{A}+\nabla(\nabla\cdot\mathbf{A})\\
\end{align}
$$

## Maxwell equations in vacuum (in cgs units)
<font color='red'>
$$
\begin{align}
   \nabla\times\mathbf{E}+\frac{1}{c}\frac{\partial \mathbf{B}}{\partial t}&=0\\
   \nabla\times\mathbf{B}-\frac{1}{c}\frac{\partial \mathbf{E}}{\partial t}&=\frac{4\pi}{c}\mathbf{J}\\
   \nabla\cdot\mathbf{E}&=4\pi\rho\\
   \nabla\cdot\mathbf{B}&=0
\end{align}
$$
</font>
## Maxwell equation in medium (in cgs units)
In the medium, we have 
$$
\begin{align}
    \rho&=\rho_{\mathrm{ext}}+\rho_{\mathrm{pol}},\\
    \mathbf{J}&=\mathbf{J}_{\mathrm{cond}}+\mathbf{J}_{\mathrm{bound}}.
\end{align}
$$
Then the Maxwell equations involving $\rho$ and $\mathbf{J}$ are rewritten as
$$
\begin{align}
   \nabla\times(\mathbf{B}-4\pi\mathbf{M})-\frac{1}{c}\frac{\partial (\mathbf{E}+4\pi\mathbf{P})}{\partial t}&=\frac{4\pi}{c}\mathbf{J}_{\mathrm{cond}}\\
   \nabla\cdot(\mathbf{E}+4\pi \mathbf{P})&=4\pi \rho_{\mathrm{ext}}
\end{align}
$$
with
$$
\begin{align}
    \rho_{\mathrm{pol}}&=-\nabla\cdot\mathbf{P},\\
    \mathbf{J}_{\mathrm{bound}}&=c\nabla\times\mathbf{M}+\frac{\partial\mathbf{P}}{\partial t}.
\end{align}
$$
Now we define the electric displacement $\mathbf{D}$ and the magnetic field $\mathbf{H}$
$$
\begin{align}
    \mathbf{D}&=\mathbf{E}+4\pi \mathbf{P}=\epsilon_1\mathbf{E}=(1+4\pi\chi_e)\mathbf{E},\\
    \mathbf{B}&=\mathbf{H}+4\pi\mathbf{M}=\mu_1\mathbf{H}=(1+4\pi\chi_m)\mathbf{H},
\end{align}
$$
and we have
<font color='red'>
$$
\begin{align}
   \nabla\times\mathbf{H}-\frac{1}{c}\frac{\partial \mathbf{D}}{\partial t}&=\frac{4\pi}{c}\mathbf{J}_{\mathrm{cond}},\\
   \nabla\cdot\mathbf{D}&=4\pi \rho_{\mathrm{ext}}\label{eqn:GaussLaw}.
\end{align}
$$
</font>
Take the gradient of (\ref{eqn:GaussLaw}), we have
$$
\begin{align}
   \nabla(\nabla\cdot\mathbf{D})&=4\pi\nabla\rho_{\mathrm{ext}}\nonumber\\
   \nabla^2\mathbf{D}+\nabla\times(\nabla\times \mathbf{D})&=4\pi\nabla\rho_{\mathrm{ext}}\nonumber\\
   \nabla^2\mathbf{E}+\nabla\times(\nabla\times \mathbf{E})&=\frac{4\pi}{\epsilon_1}\nabla\rho_{\mathrm{ext}}\nonumber\\
   \nabla^2\mathbf{E}-\nabla\times\frac{1}{c}\frac{\partial \mathbf{B}}{\partial t}&=\frac{4\pi}{\epsilon_1}\nabla\rho_{\mathrm{ext}}\nonumber\\
   \nabla^2\mathbf{E}-\frac{\mu_1}{c}\frac{\partial (\nabla\times\mathbf{H})}{\partial t}&=\frac{4\pi}{\epsilon_1}\nabla\rho_{\mathrm{ext}}\nonumber\\
   \nabla^2\mathbf{E}-\frac{\mu_1}{c}\frac{\partial}{\partial t}\left(\frac{\epsilon_1}{c}\frac{\partial \mathbf{E}}{\partial t}+\frac{4\pi}{c}\sigma_1\mathbf{E}\right)&=\frac{4\pi}{\epsilon_1}\nabla\rho_{\mathrm{ext}}\nonumber\\
   \nabla^2\mathbf{E}-\frac{\mu_1\epsilon_1}{c^2}\frac{\partial^2\mathbf{E}}{\partial t^2}-\frac{4\pi\mu_1\sigma_1}{c^2}\frac{\partial\mathbf{E}}{\partial t}&=\frac{4\pi}{\epsilon_1}\nabla\rho_{\mathrm{ext}}.
\end{align}
$$
When $\rho_{\mathrm{ext}}=0$, we have the wave equation inside the medium
<font color='red'>
$$
\begin{align}
    \nabla^2\mathbf{E}-\frac{\mu_1\epsilon_1}{c^2}\frac{\partial^2\mathbf{E}}{\partial t^2}-\frac{4\pi\mu_1\sigma_1}{c^2}\frac{\partial\mathbf{E}}{\partial t}=0.
\end{align}
$$
</font>
Plugging in the plane wave solution $\mathbf{E}=\mathbf{E}_0\exp[i(\mathbf{q}\cdot\mathbf{r}-\omega t)]$, we can obtain the dispersion relation
$$
\begin{align}
    \mathbf{q}=\frac{\omega}{c}\left[\epsilon_1\mu_1+i\frac{4\pi\mu_1\sigma_1}{\omega}\right]^{1/2}\mathbf{n_q}=\hat{q}\mathbf{n_q}.
\end{align}
$$
## Optical parameters
The complex refractive index $\hat{N}=n+ik$ is related to the complex wavevector
$$
\hat{q}=\frac{\omega}{c}\hat{N},
$$
so we have
$$
\begin{align}
    n^2=&\frac{\mu_1}{2}\left\{\left[\epsilon_1^2+\left(\frac{4\pi\sigma_1}{\omega}\right)^2\right]^{1/2}+\epsilon_1\right\}\\
    k^2=&\frac{\mu_1}{2}\left\{\left[\epsilon_1^2+\left(\frac{4\pi\sigma_1}{\omega}\right)^2\right]^{1/2}-\epsilon_1\right\}.
\end{align}
$$
The complex refractive index cannot be used to describe the dc properties of the material. For $\omega=0$, only $\epsilon_1$, $\sigma_1$, and $\mu_1$ are defined. 