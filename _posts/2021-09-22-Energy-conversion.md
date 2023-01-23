---
usemathjax: true
layout: page
title:  "Energy unit conversion"
permalink: /tools/unit-conversion/
description: A quick energy unit conversion tool
---

<script>
    {% include energy_conversion.js %}
</script>

<table style="border: none;">
    <style>
        td {border: none;
            text-align: left;
           }
    </style>
    <form name="convert">
        <tbody>
            <tr>
                <td><input name="meV" size="10" onkeyup="meVconvert()" value = "1.000"/> meV</td>
                <td><input name="K"   size="10" onkeyup="Kconvert()"   value = "11.6045"/> K  </td>
                <td><input name="Ry"   size="10" onkeyup="Ryconvert()" value = "7.35E-5"/> Ry</td>
            </tr>
            <tr>
                <td><input name="cm"  size="10" onkeyup="cmconvert()"  value = "8.0655"/> cm${}^{-1}$  </td>
                <td><input name="nm"  size="10" onkeyup="nmconvert()"  value = "1.23984E6"/> nm  </td>
                <td><input name="THz" size="10" onkeyup="THzconvert()" value = "0.242"/> THz  </td>
            </tr>
        </tbody>
    </form>
</table>
<p></p>
## Useful physical constants
$h  = 6.62607015\times10^{-34}$ J$\cdot$Hz${}^{-1}=4.135667696\times10^{-15}$ eV$\cdot$Hz${}^{-1}$ <br>
$\hbar = 1.05457181\times10^{-34}$ J$\cdot$s$=6.582119569\times10^{-16}$ eV$\cdot$s<br>
$hc = 1239.84198$ eV$\cdot$nm&emsp;$\hbar c=197.3269804$ eV$\cdot$nm<br>
$k_B=1.380649\times 10^{-23}$ J$/$K$=8.617333262\times10^{-5}$ eV$/$K<br>
$N_A=6.02214076\times10^{23}$ mol${}^{-1}$