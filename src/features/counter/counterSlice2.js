import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterList: {
    value: {
      "سبحان الله": 0,
      "الحمد لله": 0,
      "لا إله إلا الله": 0,
      "الله أكبر": 0,
      "رب اغفر لي": 0,
      "استغفر الله": 0,
      "لا حول ولا قوة إلا بالله": 0,
      "اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عني": 0,
      "اللهم صل وسلم وبارك على سيدنا محمد": 0,
      "سبحان الله وبحمده سبحان الله العظيم": 0,
      "سبحان الله والحمد لله ولا إله إلا الله والله أكبر": 0,
      "أستغفر الله الذى لا إله إلا هو الحي القيوم وأتوب إليه": 0,
      "لا اله الا انت سبحانك إني كنت من الظالمين": 0,
      "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته": 0,
      "لا إله إلا الله وحده لا شريك لهُ ، لهُ الملك ، ولهُ الحمدُ ، وهو على كل شيء قدير": 0,
    },
  },
};

const counterSlice2 = createSlice({
  name: "counterList",
  initialState,

  reducers: {
    incr2: (state) => {
      var myvalue = Number(state.counterList.value);
      myvalue = +1;
      state.counterList.value = +1;
      console.log("state counter list value is " + myvalue);
    },
  },
});

export const selectCount2 = (state) => state.counterList.value;

export const { incr2 } = counterSlice2.actions;

export default counterSlice2.reducer;