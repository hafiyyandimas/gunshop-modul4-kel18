import scar17 from '../NewGun/FN_SCAR_17.png'
import mp5 from '../NewGun/MP5.jpg'
import remington700 from '../NewGun/Remington_Model_700.jpg'

const GUNS = [
  {
    name: 'Glock 17',
    type: 'Pistol',
    caliber: '9mm',
    price: 599,
    image: '/guns/pistol.svg',
    description:
      'The duty pistol everything else is measured against. Polymer frame, 17-round magazine, striker-fired trigger. Safe, boring, and it always goes bang.',
  },
  {
    name: 'AK-47',
    type: 'Rifle',
    caliber: '7.62mm',
    price: 899,
    image: '/guns/rifle.svg',
    description:
      'Gas-operated, loose tolerances, and famously indifferent to mud. Seven decades of service and still the benchmark for a rifle that will not quit.',
  },
  {
    name: 'Remington 870',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 449,
    image: '/guns/shotgun.svg',
    description:
      'Pump-action workhorse. Five shells in the tube, a receiver that has taken more abuse than most trucks, and a sound that ends arguments.',
  },
  {
    name: 'AR-15',
    type: 'Rifle',
    caliber: '5.56mm',
    price: 799,
    image: '/guns/rifle.svg',
    description:
      'Light-recoiling, endlessly modular, and accurate well past the range most shooters can hold. The platform you can rebuild with one tool.',
  },
  {
    name: 'Desert Eagle',
    type: 'Pistol',
    caliber: '.50 AE',
    price: 1599,
    image: '/guns/pistol.svg',
    description:
      'Gas-operated hand cannon. Three and a half pounds of chromed steel that fires a round most pistols would refuse. Subtle it is not.',
  },
  {
    name: 'Mossberg 500',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 399,
    image: '/guns/shotgun.svg',
    description:
      'The other pump gun. Twin action bars, a simple safety on the tang, and a price that leaves money for ammunition.',
  },
  {
    name: 'FN SCAR 17',
    type: 'Rifle',
    caliber: '7.62x51mm',
    price: 799,
    image: scar17,
    description:
      'modular, gas-operated battle rifle chambered in 7.62x51mm NATO (.308 Winchester)',
  },
  {
    name: 'MP5',
    type: 'Submachine Gun',
    caliber: '9x19mm Parabellum submachine gun',
    price: 1599,
    image: mp5,
    description:
      'Ya gitu',
  },
  {
    name: 'Remington Model 700',
    type: 'Bolt-Action Rifle',
    caliber: '.308 Winchester',
    price: 399,
    image: remington700,
    description:
      'a famous, mass-produced bolt-action rifle (Senjata dari gem phantom force)',
  },
  
]

export default GUNS
