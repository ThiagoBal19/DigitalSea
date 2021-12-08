import backWidow from '../components/assets/GifNft/blackWidow.gif';
import captainAmerica from '../components/assets/GifNft/captainAmerica.gif';
import captainMarvel from '../components/assets/GifNft/captainMarvel.gif';
import deadpool from '../components/assets/GifNft/deadpool.gif';
import doctorStrange from '../components/assets/GifNft/doctorStrange.gif';
import hulk from '../components/assets/GifNft/hulk.gif';
import ironman from '../components/assets/GifNft/ironman.gif';
import loki from '../components/assets/GifNft/loki.gif';
import spiderman from '../components/assets/GifNft/spiderman.gif';
import thanos from '../components/assets/GifNft/thanos.gif';
import thor from '../components/assets/GifNft/thor.gif';
import vision from '../components/assets/GifNft/vision.gif';
import warMachine from '../components/assets/GifNft/warMachine.gif';
import winterSoldier from '../components/assets/GifNft/winterSoldier.gif';
import billionaireCeo from '../components/assets/Art/billionaireCeo.png';
import billionaireMeta from '../components/assets/Art/billionaireMeta.png';
import billionaireNba from '../components/assets/Art/billionaireNba.png';
import mekaDark from '../components/assets/Art/mekaDark.png';
import mekaJapan from '../components/assets/Art/mekaJapan.png';
import mekaZeus from '../components/assets/Art/mekaZeus.png';
import monsterBot from '../components/assets/Art/monsterBot.png';
import monsterDemon from '../components/assets/Art/monsterDemon.png';
import monsterWicked from '../components/assets/Art/monsterWicked.png';


const Activos = [
    {
        id: 1,
        title: "Black Widow",
        stock: 100,
        cost: "$5.000",
        image: [backWidow],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 18,
        title: "Meka Dark",
        stock: 16,
        cost: "$29.000",
        image: [mekaDark],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 2,
        title: "Captain America",
        stock: 30,
        cost: "$16.000",
        image: [captainAmerica],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 3,
        title: "Captain Marvel",
        stock: 50,
        cost: "$8.000",
        image: [captainMarvel],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 4,
        title: "Deadpool",
        stock: 45,
        cost: "$9.000",
        image: [deadpool],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 5,
        title: "Doctor Strange",
        stock: 60,
        cost: "$6.500",
        image: [doctorStrange],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 21,
        title: "Monster Bot",
        stock: 12,
        cost: "$37.000",
        image: [monsterBot],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 22,
        title: "Monster Demon",
        stock: 5,
        cost: "$50.000",
        image: [monsterDemon],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 6,
        title: "Hulk",
        stock: 60,
        cost: "$6.500",
        image: [hulk],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 7,
        title: "Iron Man",
        stock: 25,
        cost: "$18.000",
        image: [ironman],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 8,
        title: "Loki",
        stock: 25,
        cost: "$18.500",
        image: [loki],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 9,
        title: "Spider-Man",
        stock: 20,
        cost: "$21.000",
        image: [spiderman],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 10,
        title: "Thanos",
        stock: 45,
        cost: "$9.000",
        image: [thanos],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 15,
        title: "Billionaire CEO",
        stock: 15,
        cost: "$30.000",
        image: [billionaireCeo],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 16,
        title: "Billionaire Meta",
        stock: 15,
        cost: "$31.000",
        image: [billionaireMeta],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 11,
        title: "Thor",
        stock: 15,
        cost: "$24.000",
        image: [thor],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 12,
        title: "Vision",
        stock: 70,
        cost: "$4.300",
        image: [vision],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 13,
        title: "War Machine",
        stock: 75,
        cost: "$3.700",
        image: [warMachine],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 14,
        title: "Winter Soldier",
        stock: 65,
        cost: "$5.500",
        image: [winterSoldier],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 17,
        title: "Billionarie NBA",
        stock: 15,
        cost: "$31.500",
        image: [billionaireNba],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 19,
        title: "Meka Japan",
        stock: 13,
        cost: "$34.000",
        image: [mekaJapan],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 20,
        title: "Meka Zeus",
        stock: 10,
        cost: "$40.000",
        image: [mekaZeus],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 23,
        title: "Monster Wicked",
        stock: 6,
        cost: "$45.000",
        image: [monsterWicked],
        categoryId: 30,
        category: {name: "Art", id: 30}
    }
]

export default Activos;