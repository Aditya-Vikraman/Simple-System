const motherboard = [
  {
    name: 'ASRock Z890 Pro RS WiFi ',
    info: 'DDR5-4xDIMM-256GB-9000MHz/ PCIe 5.0 x16/ PCIe 5.0 M.2/ WiFi 6E/ 2.5 GbE LAN/ 2x Thunderbolt 4 ',
    socket: 'LGA-1851 ',
    price: 27000,
    image: 'images/products/motherboard/ASRock-Z890-Pro-RS-WiFi.jpg',
  },
  {
    name: 'ASUS Prime B860-Plus WIFI-CSM ',
    info: 'DDR5-4xDIMM-256GB-8600MHz/ PCIe 5.0 x16/ PCIe 5.0 M.2/ WiFi 6E/ 2.5 GbE LAN/ Thunderbolt 4 ',
    socket: 'LGA-1851 ',
    price: 19300,
    image: 'images/products/motherboard/ASUS-Prime-B860-Plus-WIFI-CSM.jpg',
  },
  {
    name: 'Gigabyte Z790M Aorus Elite AX ',
    info: 'DDR5-4XDIMM-256GB-7600MHz/ PCIe 5.0 x16/ PCIe 4.0 M.2/ WiFi 6E/ 2.5 GbE LAN ',
    socket: 'LGA-1700 ',
    price: 23000,
    image: 'images/products/motherboard/Gigabyte-Z790M.jpg',
  },
  {
    name: 'Asus Prime Z790-P (WiFi) ',
    info: 'DDR5-4xDIMM-192GB-7200MHz/ PCIe 5.0 x16/ PCIe 4.0 M.2/ WiFI 6/ 2.5 GbE LAN ',
    socket: 'LGA-1700 ',
    price: 26000,
    image: 'images/products/motherboard/Asus-Z790-P.jpg',
  },
  {
    name: 'Asus Prime H770 Plus ',
    info: 'DDR5-4xDIMM-192GB-7200MHz/ PCIe 5.0 x16/ PCIe 4.0 M.2/ 2.5GbE LAN ',
    socket: 'LGA-1700 ',
    price: 16500, 
    image: 'images/products/motherboard/Asus-Prime-H770-Plus.jpg',
  },
  {
    name: 'Gigabyte B760M DS3H AC (WiFi) ',
    info: 'DDR5-4xDIMM-256GB-7600MHz/ PCIe 4.0 x16/2x PCIe 4.0 M.2/WiFi 6E/ 2.5GbE LAN ',
    socket: 'LGA-1700 ',
    price: 15000, 
    image: 'images/products/motherboard/Gigabyte-B760M-DS3H-AX-WiFi.jpg',
  },
  {
    name: 'Gigabyte Aorus Z690 Tachyon ',
    info: 'DDR5-2xDIMM-128GB-7000MHz/ PCIe 5.0 x8/ PCIe 4.0 M.2/ WiFi 6E/ 2.5 GbE LAN ',
    socket: 'LGA-1700 ',
    price: 18000,
    image: 'images/products/motherboard/Gigabyte-Z690.jpg'
  },
  { 
    name: 'Gigabyte X870E Aorus Elite (WiFi) ',
    info: 'DDR5-4xDIMM-256GB-8200MHz/ PCIe 5.0 x16/ PCIe 5.0 M.2/ WiFi 7/ 2.5 GbE LAN/2x USB4 ',
    socket: 'AM5 ',
    price: 31500,
    image: 'images/products/motherboard/Gigabyte-X870E-Aorus-Elite-WiFi.jpg',
  }, 
  { 
    name: 'ASRock X870 Pro RS WIFI ',
    info: 'DDR5-4xDIMM-256GB-8000MHz/ PCIe 5.0 x16/ PCIe 5.0 M.2/ WiFi 7/ 2.5 GbE LAN/ USB4 ',
    socket: 'AM5 ',
    price: 23500,
    image: 'images/products/motherboard/ASRock-X870-Pro-RS-WiFi.jpg',
  }, 
  { 
    name: 'MSI Pro B850-P (WiFi) ',
    info: 'DDR5-4xDIMM-256GB-8200MHz/ PCIe 5.0 x16/ PCIe 5.0 M.2/ WiFi 7/ 5 GbE LAN ',
    socket: 'AM5 ',
    price: 21000,
    image: 'images/products/motherboard/MSI-Pro-B850-P-WiFi.jpg',
  },
  { 
    name: 'MSI Pro B840-P (WiFi) ',
    info: 'DDR5-4xDIMM-256GB-8000MHz/ PCIe 5.0 x16/ 2x PCIe 4.0 M.2/ WiFi 7/ 2.5 GbE LAN ',
    socket: 'AM5 ',
    price: 18000,
    image: 'images/products/motherboard/MSI-Pro-B840-P-WiFi.jpg',
  },
  {
    name: 'ASRock X670E Pro RS ',
    info: 'DDR5-4XDIMM-256GB-7600MHz/ PCIe 5.0 x16/ PCIe 5.0 M.2/ Wifi 6E/ 2.5 GbE LAN ',
    socket: 'AM5 Socket ',
    price: 30000,
    image: 'images/products/motherboard/ASRock-X670E.jpg'
  },
  {
    name: 'Gigabyte B650M Aorus Pro AX (WiFi) ',
    info: 'DDR5-4xDIMM-128GB-6600MHz/ PCIe 4.0 x16/ PCIe 5.0 M.2/ Wifi 6E/ 2.5 GbE LAN',
    socket: 'AM5 Socket ',
    price: 22000,
    image: 'images/products/motherboard/Gigabyte-B650.jpg'
  },
  {
    name: 'Gigabyte B650 UD AC (WiFi) ',
    info: 'DDR5-4xDIMM-256GB-8000MHz/ PCIe 4.0 x16/ PCIe 5.0 M.2 ',
    socket: 'AM5 Socket ',
    price: 14800,
    image: 'images/products/motherboard/Gigabyte-B650-UD-AC-WiFi.jpg'
  },
  {
    name: 'MSI PRO A620M-E ',
    info: 'DDR5-2xDIMM-128GB-6800MHz/ PCIe 4.0 x16/ PCIe 4.0 M.2 ',
    socket: 'AM5 Socket ',
    price: 7900,
    image: 'images/products/motherboard/MSI-Pro-A620M-E.jpg'
  },
  {
    name: 'Gigabyte X570 Aorus Elite ',
    info: 'DDR4-4xDIMM-128GB-4700MHz/ PCIe 4.0 x16/ 2x PCIe 4.0 M.2/ WiFi 6 ',
    socket: 'AM4 Socket ',
    price: 18000,
    image: 'images/products/motherboard/Gigabyte-X570.jpg'
  },
  {
    name: 'Gigabyte B550M DS3H AC (WiFi) ',
    info: 'DDR4-4xDIMM-128GB-4700MHz/ PCIe 4.0 x16/ 2x PCIe 4.0 M.2 ',
    socket: 'AM4 Socket ',
    price: 10000,
    image: 'images/products/motherboard/Gigabyte-B550M-DS3H-AC-WiFi.jpg'
  },
  {
    name: 'Asus Prime A520M-K ',
    info: 'DDR4-2xDIMM-64GB-4800MHz/ PCIe 3.0 x16/ 2x PCIe 3.0 M.2/ ',
    socket: 'AM4 Socket ',
    price: 4000,
    image: 'images/products/motherboard/Asus-Prime-A520M-K.jpg'
  },
 
];