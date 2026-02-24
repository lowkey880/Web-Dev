import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})


export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: `Смартфон Apple iPhone 13 128Gb черный`,
      description: `Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.`,
      price: 305475,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    },
    {
      id: 2,
      name: `Пароочиститель atreon DFHS-01 белый, черный`,
      description: `Пароочиститель Atreon 3 в 1 — мощная уборка без химии! Универсальный помощник для дома: Пароочиститель. Отпариватель. Стеклоочиститель Подходит для полов, мебели, кухни, плитки, духовки, одежды, авто и сантехники`,
      price: 24900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p30/p6e/97012555.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p0c/59895566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p34/p0d/59895568.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/?c=750000000',
    },
    {
      id: 3,
      name: `Наушники Apple EarPods USB-C белый`,
      description: 'Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн и надёжное качество звука. ✨',
      price: 10700,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h55/hd8/84353546846238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/ha9/84353546911774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h93/84353546977310.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000',
    },
    {
      id: 4,
      name: `Стилус Active Stylus Pen K-2260 белый`,
      description: 'Стилус Active Stylus Pen K-2260 белый',
      price: 1598,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h69/68930990243870.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h69/68930990243870.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h69/68930990243870.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h69/68930990243870.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/stilus-active-stylus-pen-k-2260-belyi-108865258/?c=750000000',
    },
    {
      id: 5,
      name: `Обеденный стол Seol, 100х100x75 см, ЛДСП, тон светлый мрамор`,
      description: `Стол SEOL:
Столешница: премиальное ЛДСП, цельный, влагостойкий, цвет белый мрамор.
Основание: металлическое, с полимерным порошковым покрытием.`,
      price: 28513,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/hbd/69835310235678.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/h68/69835310759966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h28/h47/69835311284254.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h28/h47/69835311284254.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/stol-obedennyi-seol-100x100x75-sm-ton-svetlyi-mramor-109252994/?c=750000000',
    },
    {
      id: 6,
      name: `Чехол для Apple iPhone 13 серый`,
      description: `Чехол для Apple iPhone 13 — это надёжная защита вашего смартфона от повреждений и царапин в стильном серым цвете.

✨ Особенности:
- ✅ Ударопрочный силикон — обеспечивает максимальную защиту при падениях.
- 🧱 Пылезащитный дизайн — сохранит ваш iPhone в идеальном состоянии.`,
      price: 389,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/p07/14525019.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pf8/pab/92239158.bin?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-seryi-131815019/?c=750000000',
    },
    {
      id: 7,
      name: `Кухонные весы Generic SF-400`,
      description: `Современные электронные кухонные весы имеют элегантную платформу из пластика. Весы выполнены в белом корпусе. Предел взвешивания 10 кг.`,
      price: 669,
      rating: 5,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    },
    {
      id: 8,
      name: `Отпариватель AEROLITH Steam Garment Premium белый, бронзовый`,
      description: `Описание товара
Напольный отпариватель для одежды — мощный помощник для быстрой глажки без утюга!`,
      price: 45990,
      rating: 5,
      image: `https://resources.cdn-kaspi.kz/img/m/p/p88/p84/84404891.jpeg?format=gallery-medium`,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/pe9/81085669.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pec/81085671.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pec/81085672.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/otparivatel-aerolith-steam-garment-premium-belyi-bronzovyi-150458532/?c=750000000',
    },
    {
      id: 9,
      name: `Xerox Phaser 3020BI белый`,
      description: `Xerox Phaser 3020 - это монохромный лазерный принтер, который отлично подойдет для персонального использования. Белый матовый корпус и стильный дизайн будут смотреться органомично на любом письменном столе. Благодаря своему маленькому весу и компактным размерам`,
      price: 69990,
      rating: 5,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h68/hab/63757711343646.jpg?format=gallery-medium`,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/hf3/63757713440798.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h9b/63757714096158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/hf9/63757715472414.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xerox-phaser-3020bi-belyi-1500208/?c=750000000',
    },
    {
      id: 10,
      name: `Наушники Zhang Kai S27 черный`,
      description: `Беспроводные наушники S27 — это сочетание современных технологий и комфорта. Благодаря Bluetooth 5.3 они обеспечивают стабильное соединение, быстрое сопряжение и экономичное энергопотребление.`,
      price: 4999,
      rating: 5,
      image: `https://resources.cdn-kaspi.kz/img/m/p/p84/pd7/99639198.png?format=gallery-medium`,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/p24/97813280.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcb/pe8/60066834.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p58/pe9/60066839.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-zhang-kai-s27-chernyi-137396098/?c=750000000',
    }
  ];
}