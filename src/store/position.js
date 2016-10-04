const positionData = {};
export default positionData;

positionData.getPositions = () => {
   let data = [];
   for (let i = 0; i < 10; i++) {
      data.push(
         {
            id: i,
            name: Math.round(Math.random() * 100),
            active: Math.random() > 0.5
         }
      );
   }

   return new Promise(
      (resolve, reject) => {
         resolve(
            {
               data
            }
         );
      }
   );
};
