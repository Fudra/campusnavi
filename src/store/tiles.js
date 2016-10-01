const tileData = {};

export default tileData;

tileData.getTaskData = () => {
   return new Promise(
      (resolve, reject) => {
         resolve(
            {
               count: Math.ceil(Math.random() * 100)
            }
         );
      }
   )
};
