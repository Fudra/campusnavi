const positionData = {};
export default positionData;

positionData.getPositions = () => {
   let data = [];
   for (let i = 0; i < 10; i++) {
      data.push(
         {
            id: i,
            name: i + ' lorem'
         }
      )
   }
   console.log('data' + data);

   return new Promise(
      (resolve, reject) => {
         resolve(
            {
               data
            }
         );
      }
   )
};
