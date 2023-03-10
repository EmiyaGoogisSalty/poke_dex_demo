// ๐official, dream_world, default ์ด๋ฏธ์ง๋ฅผ ๋ชจ๋  ํฌ์ผ๋ชฌ์๊ฒ ์ ์ฉํ๊ธฐ

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { POKEMON_IMAGE_TYPE } from "../Constant";

// typeof: ๊ฐ์ฒด ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ฒด ํ์์ผ๋ก ๋ณํํด์ฃผ๋ ์ฐ์ฐ์
// keyof: ๊ฐ์ฒด ํํ ํ์์ ๋ฐ๋ก ์์ฑ๋ค๋ง ๋ฝ์ ๋ชจ์ ์ ๋์จํ์์ ๋ง๋ค์ด์ฃผ๋ ์ฐ์ฐ์.
// POKEMON_IMAGE_TYPE์ [OFFICIAL..., DREAM..., DEFAULT]์ ๊ฐ์ PokemonImageKeyType์ ํ์์ผ๋ก ์์ฑ
// export type PokemonImgaeKeyType = "officialArtWork" | "dreamWork" | "defualtArt.."
export type PokemonImageKeyType =
    typeof POKEMON_IMAGE_TYPE[keyof typeof POKEMON_IMAGE_TYPE];

// PokemonImage์ํ๋ฅผ ์ ์ฅํ ๋ ์๋ฃํ์ ๋ช์
export interface PokemonImageState {
    pokemonImage: PokemonImageKeyType;
}

// ๋ก๋ฉ์ ์ฒ์ default ํฌ์ผ๋ชฌ ์ด๋ฏธ์ง๋ official ์คํ์ผ์ ์ํธ์ํฌ, ์ด๊ธฐ์ํ
const initialState: PokemonImageState = {
    pokemonImage: POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK,
};

// ์ฌ๋ผ์ด์ค ์์ฑ (reducer์ ์ก์์ ํ๋๋ก ํฉ์น ํจ์์ด๋ค.)
export const imageSlice = createSlice({
    name: "imageType",
    initialState,
    reducers: {
        // ๋ฆฌ๋์
        // PayloadAction: ๋ฌธ์์ด ์ ํ ๋ฐ ๊ด๋ จ ํ์ด๋ก๋๊ฐ ์๋ ์์์๋๋ค. ์ด๊ฒ์ ์ ํ์๋๋ค
        // ๋ฌธ์์ด์ ํ์ PokemonImageKeyType์ผ๋ก ๋ช์
        changeImage: (state, action: PayloadAction<PokemonImageState>) => {
            state.pokemonImage = action.payload.pokemonImage;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeImage } = imageSlice.actions;

// ๋ฆฌ๋์๋ฅผ ๋ด๋ณด๋ด์ store์ ์ ์ฉํด์ผํ๋ค.
export const imageSliceReducer = imageSlice.reducer;
