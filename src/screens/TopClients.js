import {List} from './List';

export class TopClients extends List {
  getItems() {
    return clients;
  }
}
export const clients = [
  {
    url: 'https://sap.com',
    thumbnail: require('../assets/img/clients/logo_sap.png'),
  },
  {
    url: 'https://www.gofundme.com',
    thumbnail: require('../assets/img/clients/logo_gofundme.png'),
  },
  {
    url: 'https://www.post.ch/en',
    thumbnail: require('../assets/img/clients/logo_swisspost.png'),
  },
  {
    url: 'https://www.virginatlantic.com',
    thumbnail: require('../assets/img/clients/logo_virgin.png'),
  },
  {
    url: 'https://itslearning.com',
    thumbnail: require('../assets/img/clients/logo_itslearning.png'),
  },
  {
    url: 'https://www.calliduscloud.com',
    thumbnail: require('../assets/img/clients/logo_callidus.png'),
  },
  {
    url: 'http://www.hireiqinc.com',
    thumbnail: require('../assets/img/clients/logo_hireiq.png'),
  },
  {
    url: 'https://www.fiverr.com',
    thumbnail: require('../assets/img/clients/logo_fiverr.png'),
  },
  {
    url: 'https://circleup.com',
    thumbnail: require('../assets/img/clients/logo_circleup.png'),
  },
  {
    url: 'https://us.youcruit.com',
    thumbnail: require('../assets/img/clients/logo_youcruit.png'),
  },
  {
    url: 'https://www.netflix.com',
    thumbnail: require('../assets/img/clients/logo_netflix.png'),
  },
  {
    url: 'https://spotify.com',
    thumbnail: require('../assets/img/clients/logo_spotify.png'),
  },
  {
    url: 'http://www.stern.nyu.edu',
    thumbnail: require('../assets/img/clients/logo_nyustern.png'),
  },
  {
    url: 'https://dubizzle.com',
    thumbnail: require('../assets/img/clients/logo_dubizzle.png'),
  },
  {
    url: 'https://usv.com',
    thumbnail: require('../assets/img/clients/logo_usv.png'),
  },
  {
    url: 'https://www.mavenclinic.com',
    thumbnail: require('../assets/img/clients/logo_mavenclinic.png'),
  },
];
