const tileData = {};

export default tileData;

tileData.getTaskData = () => {
   return new Promise(
      (resolve, reject) => {
         resolve(
            {
               count: Math.ceil(Math.random() * 200)
            }
         );
      }
   );
};

tileData.getRouteData = () => {
   return new Promise(
      (resolve, reject) => {
         resolve(
            {
               count: Math.ceil(Math.random() * 100)
            }
         );
      }
   );
};

tileData.getPositionData = () => {
   return new Promise(
      (resolve, reject) => {
         resolve(
            {
               count: Math.ceil(Math.random() * 150)
            }
         );
      }
   );
};

