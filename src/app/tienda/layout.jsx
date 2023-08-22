"use client"
import '../globals.css'
//implementar font awesome icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { createContext, useContext, useState } from 'react';
import {BsBag} from "react-icons/bs";
import {FaRegHeart} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";
import { IconContext } from 'react-icons';

config.autoAddCss = false;

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const categorias = ["Todos", "Skin Care", "Labios", "Cabello", "Ojos", "Accesorios", "Piel"];
const filtrosLabios = ["Lipbalm", "Labial", "Gloss", "Delineador", "Especial"]

export default function NavBarLayout({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedFilter, setSelectedFilter] = useState();
  return (
    <div>
      <div className="navigation-bar">
        {
          categorias.map((categoria, index) =>
            <p
              key={index}
              className={"texto-navigation-bar"+ (categoria===selectedCategory? " underline":"")}
              tabIndex={index}
              onClick={() => setSelectedCategory(categoria)}>
              {categoria}
            </p>
          )
        }
      </div>
      <div className="flex flex-initial flex-nowrap w-full h-max py-3.5 px-9" style={{backgroundColor:"var(--transicion-700)"}}>
        <div className="filter-bar">
          {
            filtrosLabios.map((filtro, index) =>
              <p
                key={index}
                className={"texto-filter-bar"+(filtro===selectedFilter? " underline":"")}
                tabIndex={index}
                onClick={() => setSelectedFilter(filtro)}>
                {filtro}
              </p>
            )
          }
        </div>
        <div style={{width:"25%", display:"flex"}}>
          <IconContext.Provider value={{ className: 'icons-filter-bar' }}>
            <BsBag/> <FaRegHeart/> <HiMenu/>
          </IconContext.Provider>
        </div>
      </div>
      <ProductContext.Provider value={{ selectedCategory }}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}
