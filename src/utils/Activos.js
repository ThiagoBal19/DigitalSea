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
        id: 16,
        title: "Billionaire Meta #136",
        stock: 15,
        cost: 31000,
        image: [billionaireMeta],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 18,
        title: "Meka Dark #8150",
        stock: 16,
        cost: 29000,
        image: [mekaDark],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 2,
        title: "Captain America #7294",
        stock: 30,
        cost: 16000,
        image: [captainAmerica],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 3,
        title: "Captain Marvel #2",
        stock: 50,
        cost: 8000,
        image: [captainMarvel],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 4,
        title: "Deadpool #9201",
        stock: 45,
        cost: 9000,
        image: [deadpool],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 5,
        title: "Doctor Strange #321",
        stock: 60,
        cost: 6500,
        image: [doctorStrange],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 21,
        title: "Monster Bot #17",
        stock: 12,
        cost: 37000,
        image: [monsterBot],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 22,
        title: "Monster Demon #69",
        stock: 5,
        cost: 50000,
        image: [monsterDemon],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 6,
        title: "Hulk #4",
        stock: 60,
        cost: 6500,
        image: [hulk],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 7,
        title: "Iron Man #3",
        stock: 25,
        cost: 18000,
        image: [ironman],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 8,
        title: "Loki #912",
        stock: 25,
        cost: 18500,
        image: [loki],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 9,
        title: "Spider-Man #723",
        stock: 20,
        cost: 21000,
        image: [spiderman],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 10,
        title: "Thanos #6535",
        stock: 45,
        cost: 9000,
        image: [thanos],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 15,
        title: "Billionaire CEO #634",
        stock: 15,
        cost: 30000,
        image: [billionaireCeo],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 1,
        title: "Black Widow #34",
        stock: 100,
        cost: 5000,
        image: [backWidow],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 11,
        title: "Thor #85",
        stock: 15,
        cost: 24000,
        image: [thor],
        categoryId: 40,
        category: {
            name: "nfts",
            id: 40
        }
    },
    {
        id: 12,
        title: "Vision #4142",
        stock: 70,
        cost: 4300,
        image: [vision],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 13,
        title: "War Machine #1421",
        stock: 75,
        cost: 3700,
        image: [warMachine],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 14,
        title: "Winter Soldier #421",
        stock: 65,
        cost: 5500,
        image: [winterSoldier],
        categoryId: 40,
        category: {name: "nfts", id:40}
    },
    {
        id: 17,
        title: "Billionarie NBA #342",
        stock: 15,
        cost: 31500,
        image: [billionaireNba],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 19,
        title: "Meka Japan #140",
        stock: 13,
        cost: 34000,
        image: [mekaJapan],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 20,
        title: "Meka Zeus #27",
        stock: 10,
        cost: 40000,
        image: [mekaZeus],
        categoryId: 30,
        category: {name: "Art", id: 30}
    },
    {
        id: 23,
        title: "Monster Wicked #413",
        stock: 6,
        cost: 45000,
        image: [monsterWicked],
        categoryId: 30,
        category: {name: "Art", id: 30}
    }
]

export default Activos;