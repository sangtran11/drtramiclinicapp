import React, { createContext, useContext, useState } from "react";
import { knowledgeArticleList, originProductList } from "@/constants";

const useApp = () => {
  const [openedNavbar, setOpenedNavbar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activePageDetailService, setActivePageDetailService] = useState(1);
  const [activeKnowledgeBadge, setActiveKnowledgeBadge] = useState<number>(1);
  const [allKnowledgeArticleList, setAllKnowledgeArticleList] =
    useState(knowledgeArticleList);
  const [serviceSearchingList, setServiceSearchingList] = useState([] as any);
  const [knowledgeSearchingList, setKnowledgeSearchingList] = useState(
    [] as any,
  );
  const [productSearchingList, setProductSearchingList] = useState([] as any);
  const [allOriginProductListList, setAllOriginProductListList] =
    useState(originProductList);
  const [activeProductBadge, setActiveProductBadge] = useState<number>(1);

  return {
    openedNavbar,
    setOpenedNavbar,
    activePageDetailService,
    setActivePageDetailService,
    activeKnowledgeBadge,
    setActiveKnowledgeBadge,
    allKnowledgeArticleList,
    setAllKnowledgeArticleList,
    serviceSearchingList,
    setServiceSearchingList,
    knowledgeSearchingList,
    setKnowledgeSearchingList,
    productSearchingList,
    setProductSearchingList,
    searchValue,
    setSearchValue,
    allOriginProductListList,
    setAllOriginProductListList,
    activeProductBadge,
    setActiveProductBadge,
  };
};

export type AppContextType = ReturnType<typeof useApp>;

const context = createContext<AppContextType | null>(null);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useApp();

  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useAppContext = () => {
  const value = useContext(context);

  if (!value) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }

  return value;
};
