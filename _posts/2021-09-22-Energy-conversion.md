---
usemathjax: true
layout: energy
title:  "Energy unit conversion"
permalink: /energy-unit/
description: convenient energy conversion
---

<script>
    {% include energy_conversion.js %}
</script>

<table>
    <form name="conversion">
        <tbody>
            <tr>
                <td><input name="meV" size="15" onkeyup="meVconvert()"/>meV</td>
                <td><input name="K"   size="15" onkeyup="Kconvert()"/>K</td>
                <td><input name="cm"  size="15" onkeyup="cmconvert()"/>cm${}^{-1}$</td>
                <td><input name="nm"  size="15" onkeyup="nmconvert()"/>nm</td>
                <td><input name="THz" size="15" onkeyup="Thzconvert()"/>THz</td>
            </tr>
        </tbody>
    </form>
</table>