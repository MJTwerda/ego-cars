"use client";
import { useState, useEffect, useCallback } from "react";
import { VehicleModelI } from "../modelCard/models.interfaces";
import { SortOptions } from "./sort.interfaces";
import VehicleCard from '../modelCard/modelList';
import FilterSectionChips from "./FilterSectionChips";
import CommonMenu from "../menu/Menu";
import { MenuItemI } from "../menu/menu.interfaces";

type FilterAndSortProps = { modelList: VehicleModelI[] };

export default function FilterAndSortSection({ modelList }: FilterAndSortProps) {
  const [filteredModels, setFilteredModels] = useState<VehicleModelI[]>(modelList);
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState<SortOptions>(SortOptions.RANDOM);

  const showDataFiltered = useCallback(() => {
    let updatedModels = [...modelList];

    // Filtrado
    if (filterValue) {
      switch (filterValue) {
        case "all":
          updatedModels = modelList;
          break;
        default:
          updatedModels = updatedModels.filter((m) => m.segment.toLowerCase().includes(filterValue.toLowerCase()));
          break;
      }
    }

    // Ordenamiento
    switch (sortValue) {
      case SortOptions.PRICE_ASC:
        updatedModels.sort((a, b) => a.price - b.price);
        break;
      case SortOptions.PRICE_DESC:
        updatedModels.sort((a, b) => b.price - a.price);
        break;
      case SortOptions.OLDEST:
        updatedModels.sort((a, b) => a.year - b.year);
        break;
      case SortOptions.NEWEST:
        updatedModels.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }

    setFilteredModels(updatedModels);
  }, [filterValue, sortValue, modelList]);

  useEffect(() => {
    showDataFiltered();
  }, [showDataFiltered]);

  const handleFilterModels = (tabValue: string) => {
    setFilterValue(tabValue);
  };

  const handleSortModels = (sortValue: SortOptions) => {
    setSortValue(sortValue);
  };

  const vehicleSortMenu: MenuItemI[] = [
    {
      label: "Nada",
      value: SortOptions.RANDOM,
      handleClick: () => handleSortModels(SortOptions.RANDOM),
    },
    {
      label: "De menor a mayor precio",
      value: SortOptions.PRICE_ASC,
      handleClick: () => handleSortModels(SortOptions.PRICE_ASC),
    },
    {
      label: "De mayor a menor precio",
      value: SortOptions.PRICE_DESC,
      handleClick: () => handleSortModels(SortOptions.PRICE_DESC),
    },
    {
      label: "Más nuevos primero",
      value: SortOptions.NEWEST,
      handleClick: () => handleSortModels(SortOptions.NEWEST),
    },
    {
      label: "Más viejos primero",
      value: SortOptions.OLDEST,
      handleClick: () => handleSortModels(SortOptions.OLDEST),
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-11 pb-2 border-b-2 sm:mb-14">
        <FilterSectionChips 
          filterLabel={{ label: "Filtrar por", isStrong: true }} 
          handleFilterModels={handleFilterModels} 
        />
        
        <CommonMenu 
          menuLabel={{ label: "Ordenar por", isStrong: true }}
          menuItems={vehicleSortMenu} 
          justifyItems='start' 
        />
      </div>

      <ul>
        {filteredModels.map((model: VehicleModelI) => (
          <VehicleCard key={model.id} vehicleData={model} />
        ))}
      </ul>
    </div>
  );
}