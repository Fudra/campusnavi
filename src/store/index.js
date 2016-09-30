import md5 from 'blueimp-md5';

const store = {};
export default store;

store.getUserData = () => {
   return new Promise(
      (resolve, reject) => {
         /* TODO: change to Vue.http */
         resolve({
            name: 'Michael Mitchell',
            role: 'Administrator',
            img: 'https://www.gravatar.com/avatar/' + md5('Michael Mitchell') + '?d=identicon'
         });
      }
   );
};
