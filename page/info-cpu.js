const cpuHTML = `
<p>
  For decades, Intel and AMD have made the most trusted CPUs on the market, but the thicket of model numbers, names, and generations can make it challenging to choose the best processor (CPU) for your Personel Computer (PC).
  
  <p>
  For <b>Intel</b>, choose a 12th or the latest 13th gen processors. The 12th gen supports DDR5 (4800 MT/s) and PCIe 5.0, where as the 11th gen supports only upto DDR4 and PCIe 4.0.
  The 13th gen supports DDR5 up to 5600 MT/s. The 11th, 12th and 13th gen support thunderbolt 4.
  <p>

  <p>
  For <b>AMD</b>, choose 5th gen or the latest 7th gen processors for desktop. The 6th gen (mobile only) supports  only DDR5 (5200 MT/s) and PCIe 4.0. The 7th gen supports DDR5 (5200 MT/s) and PCIe 5.0. Both 6th and 7th gen support USB 4.0.
  <P>

  Below, we&#39;ll look at naming conventions, so when you see Intel Core™ i5-12450HX or AMD Ryzen 5700U, you&#39;ll know exactly what each part of the name means.
</p>

<div class="brand-photo-container">
  <img class="intel-logo-image" src="images/intel-logo.png">
</div>

<div class="processor-name-photo-container">
  <img class="processor-name-image" src="images/intel-processor-taxonomy.png">
</div>

<p>
  In Intel Core i7-13700K, first comes the Brand name (Intel Core), then the Brand Modifier (i7), then the Generation indicator (13), then the SKU Numeric digit (700), finaly the Product Line Suffix (K).
</p>

<p class="topic">
Brand
</p>
<p>
The Intel naming scheme starts with the processorcs brand—the overall product line the processor was created for. The most common Intel processor names begin with Intel Core.
</p>

<p class="topic">
  Brand Modifier
</p>
<p>
  Intel Core processor series include a brand modifier before the remaining parts of the model number. Today, the Intel Core processor series includes the brand modifiers i3, i5, i7, and i9. Higher brand modifier numbers offer a higher level of performance. For example, within a given processor family, an i9 will outperform an i7, which will outperform an i5, and outperform i3.
</p>

<p class="topic">
  Generation Indicator
</p>
<p>
  After the brand and brand modifier comes the processor&#39;s generation indicator. Intel Processor generations are identified in the processor number in most Intel Core processor brands, with the generation being listed after the dash. When a processor has four or five digits, the first one or two digits represent the generation. For example, a processor with the digits 9700 is a 9th Gen processor, while one labeled 12800 is a 12th Gen processor.
</p>

<p class="topic">
  SKU Numeric Digits
</p>
<p>
  For the majority of Intel processors, the final three digits of the product number are the SKU. SKUs are generally assigned in the order in which processors in that generation and product line are developed. A higher SKU within otherwise-identical processor brands and generations will generally have more features.
</p>

<p class="topic">
  Product Line Suffix
</p>
<p>
  The SKU suffix is another key indicator of the processor&#39;s capabilities. These remaining differences are indicated by a letter-based product line suffix. For example, within the Intel Core processor series, U indicates a processor that has been designed for power-efficient laptops or 2 in 1s. Meanwhile, XE indicates an “extreme edition” processor for desktops designed for maximum performance.
</p>

<div class="intel-sku-suffix">
  <div class="segment">
    Desktop
  </div>
  <div class="suffix-config">
    <div class="suffix-row">
      <div class="suffix">
        K
      </div>
      <div class="optimization">
        High performance, unlocked
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        F
      </div>
      <div class="optimization">
        Requires discrete graphics
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        S
      </div>
      <div class="optimization">
        Special edition
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        T
      </div>
      <div class="optimization">
        Power-optimized lifestyle
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        X/XE
      </div>
      <div class="optimization">
        Highest performance, unlocked
      </div>
    </div>
  </div>

  <div class="segment">
    Laptop
  </div>
  <div>
    <div class="suffix-row">
      <div class="suffix">
      HX
      </div>
      <div class="optimization">
        High performance, all SKUs unlocked
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        HK
      </div>
      <div class="optimization">
        High performance, unlocked
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        H
      </div>
      <div class="optimization">
        High performance
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        P
      </div>
      <div class="optimization">
        Performance for thin & light
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        U
      </div>
      <div class="optimization">
        Power efficient
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        Y
      </div>
      <div class="optimization">
        Extremely low-power efficient
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        G1-G7
      </div>
      <div class="optimization">
        Graphics level (processors with newer integrated graphics technology)
      </div>
    </div>
  </div>

  <div class="segment">
    Embedded
  </div>
  <div>
    <div class="suffix-row">
      <div class="suffix">
        E
      </div>
      <div class="optimization">
        Embedded
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        UE
      </div>
      <div class="optimization">
        Power efficient
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        HE
      </div>
      <div class="optimization">
        High performance
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        UL
      </div>
      <div class="optimization">
        Power efficient, in LGA package
      </div>
    </div>
    <div class="suffix-row">
      <div class="suffix">
        HL
      </div>
      <div class="optimization">
        High performance, in LGA package
      </div>
    </div>
  </div>
</div>

<div class="brand-photo-container">
  <img class="amd-logo-image" src="images/amd.png">
</div>

<div class="processor-name-photo-container">
  <img class="amd-name-image" src="images/amd-processor-taxonomy.jpg">
</div>

<p class="topic">
  Brand and segment
</p>
<p>
 In Ryzen 7 1700X, the “Ryzen 7” part denotes the level of the processor in AMD&#39;s hierarchy, which is kind of similar to Intel&#39;s (i3, i5, and i7). The “7” puts the chip around the top of the lineup, which is divided into four different levels  Ryzen 3, Ryzen 5, Ryzen 7, and Ryzen 9.
</p> 

<p class="topic">
  Generation
</p>
<p>
  The “1” indicates the generation, which in this case is the first generation.
</p>

<p class="topic">
  Performance level
</p>
<p>
  The following “7” situates the chip in a relative sense versus other first-generation Ryzen 7 CPUs. So, a 1800X will be more performant than a 1700X.
</p>

<p class="topic">
  Model Number 
</p>
<p>
  The last two digits are simply differentiators, which almost always are “00” or a step-up multiple of 5 or 10 if the preceding number isn&#39;t enough characterization. AMD uses this method to differentiate its PRO lineup from its mainstream chips. An example being the Ryzen 7 PRO 5875U, where the “5” usually indicates an ultra-low-power mobile-class processor.
</p>

<p class="topic">
  Power suffix
</p>
<p>
  Finally the letters tell you what power class the mobile chips belong to. For AMD Ryzen chips, U stands for ultra portable (15-28W), H is for high-power mobile (35-45W), and the HX denotes high-performance overclockable mobile chips (55W) with the highest power requirements.
The H-class CPUs in the Ryzen lineup are meant for mainstream power notebooks, gaming laptops, and workstations, usually paired with discrete graphics. The U-class CPUs are meant for lightweight laptops, usually relying on on-chip graphics.
</p>

<p class="topic">
  New Name Scheme
</p>
<p>
  The new name scheme will be used to demarcate its new Zen 4 based Ryzen 7000 series processors from 2023.
</p>

<div class="processor-name-photo-container">
  <img class="amd-new-name-image" src="images/amd-new-taxonomy.jpg">
</div>
`