---
usemathjax: true
layout: page
title: Notes on pump-probe measurement
permalink: /notes/pumpprobe/
description: 05/22/2023
---
## Change of reflectivity
The pump probe measurement detects the change of refectivity of the sample during the pumping proccess. The peak of the measurement gives $\Delta R/R=(R_{\mathrm{pump}}-R_{0})/R_{0}$. We can rewrite the change of reflectivity in terms of the change of reflection coefficient $\Delta\hat{r}=\hat{r}_{\mathrm{pump}}-\hat{r}_0$:
$$
\begin{align}  
    \frac{\Delta R}{R}=&\frac{R_{\mathrm{pump}}-R_0}{R_0}=\frac{\hat{r}^*_{\mathrm{pump}}\hat{r}_{\mathrm{pump}}-\hat{r}_0^*\hat{r}_0}{\hat{r}_0^*\hat{r}_0}\nonumber\\
    =&\frac{\hat{r}_0^*\Delta\hat{r}+\hat{r}_0\Delta\hat{r}^*+\Delta\hat{r}^*\Delta\hat{r}}{\hat{r}_0^*\hat{r}_0}\nonumber\\
    =&\frac{\Delta\hat{r}}{\hat{r}_0}+\left(\frac{\Delta \hat{r}}{\hat{r}_0}\right)^*+\frac{\Delta\hat{r}^*\Delta\hat{r}}{\hat{r}_0^*\hat{r}_0}\nonumber\\
    =&2\left|\frac{\Delta\hat{r}}{\hat{r}_0}\right|\cos\phi+\left|\frac{\Delta\hat{r}}{\hat{r}_0}\right|^2.
\end{align}
$$
## Change of reflection coefficient
The reflection coefficient $\hat{r}$ can be computed from the complex dielectric constant
$$
\begin{align}
    \hat{r}=\frac{1-\sqrt{\hat{\epsilon}}}{1+\sqrt{\hat{\epsilon}}},
\end{align}
$$
and the dielectric constant is related to the optical conductivity 
$$
\begin{align}
    \hat{\epsilon}=1+\frac{i\hat{\sigma}}{\omega}.
\end{align}
$$
Hence the change of reflection coefficient can be computed by the change of the optical conductivity
$$
\begin{align}
    \frac{\Delta\hat{r}}{\hat{r}}=\frac{1}{\hat{r}}\frac{\partial\hat{r}}{\partial\hat{\epsilon}}\Delta\hat{\epsilon}=\frac{\Delta\hat{\epsilon}}{(\hat{\epsilon}-1)\sqrt{\hat{\epsilon}}}=\frac{\Delta\hat{\sigma}}{\hat{\sigma}\sqrt{1+\frac{i\hat{\sigma}}{\omega}}}.
\end{align}
$$
## Optical conductivity