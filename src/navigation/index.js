// all navigation handle (sidebar)
//write down functionality (so no need jsx extensions)
import { allNav } from "./allNav";
export const getNavs = (role) => {
  const finalNavs = []; //main eita array eitar modde j nav gula match korbe mainly shy gula rakhbo

  for (let i = 0; i < allNav.length; i++) {
    if (role === allNav[i].role) {
      //check allnav er i number index er j role ache shy role er shate jodi match kore  tahole finalNavs e push kore dibo
      finalNavs.push(allNav[i]);
    }
  }
  return finalNavs;
};
