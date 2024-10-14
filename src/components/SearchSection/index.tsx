import { useEffect } from "react";
import { TextInput, rem, Grid, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useDebouncedState } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";
import { knowledgeArticleList, servicesListLogo, originProductList } from "@/constants";
import { useNavigate } from "react-router-dom";

const SearchSection = ({ onClose }: any) => {
  const [textSearch, setTextSearch] = useDebouncedState("", 200);
  const {
    serviceSearchingList,
    setServiceSearchingList,
    knowledgeSearchingList,
    setKnowledgeSearchingList,
    productSearchingList,
    setProductSearchingList,
    setSearchValue,
  } = useAppContext();
  const navigate = useNavigate();

  const handleEnterSearch = (event: any) => {
    const value = event.currentTarget.value;
    if (value === "") return;

    if (event.key === "Enter") {
      if (
        !serviceSearchingList.length &&
        !knowledgeSearchingList.length &&
        !productSearchingList.length
      )
        return;
      setSearchValue(value);
      navigate("/ket-qua-tim-kiem");
      onClose();
    }
  };

  function removeDiacritics(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    if (textSearch === "") {
      setServiceSearchingList([]);
      setKnowledgeSearchingList([]);
      setProductSearchingList([]);
      return;
    }
    
    const normalizedTextSearch = removeDiacritics(textSearch.toLowerCase());

    setServiceSearchingList(
      servicesListLogo.filter((item) => {
        const normalizeSearchTag = removeDiacritics(item.content.searchTag.toLowerCase());
        return normalizeSearchTag.includes(normalizedTextSearch);
      }),
    );
    setKnowledgeSearchingList(
      knowledgeArticleList.filter((item) => {
        const normalizeSearchTag = removeDiacritics(item.searchTag.toLowerCase());
        return normalizeSearchTag.includes(normalizedTextSearch);
      }),
    );
    setProductSearchingList(
      originProductList.filter((item) => {
        const normalizeSearchTag = removeDiacritics(item.searchTag.toLowerCase());
        return normalizeSearchTag.includes(normalizedTextSearch);
      }),
    );
  }, [textSearch]);

  return (
    <>
      <TextInput
        defaultValue={textSearch}
        onChange={(event) => {
          setTextSearch(event.currentTarget.value);
        }}
        onKeyDown={handleEnterSearch}
        placeholder="Nhập thông tin ..."
        rightSection={
          <IconSearch
            className="cursor-pointer"
            onClick={handleEnterSearch}
            size={rem(20)}
          />
        }
      />
      {textSearch &&
        !serviceSearchingList.length &&
        !knowledgeSearchingList.length &&
        !productSearchingList.length && (
          <Title order={4} mt={rem(16)} align="center">
            Không có kết quả tìm kiếm ...
          </Title>
        )}
      <Grid gutter={rem(30)} mt={rem(24)} className="max-h-[250px]">
        {serviceSearchingList.length > 0 && (
          <Grid.Col sm={12} md={12} lg={4}>
            <Title order={3} mb={"md"}>
              Dịch Vụ
            </Title>
            {serviceSearchingList.map((item: any, index: number) => (
              <p className="break-word hover:font-bold mb-3" key={index}>
                <Link to={`/dich-vu/${item.id}`} onClick={() => onClose()}>
                  {item.content.name}
                </Link>
              </p>
            ))}
          </Grid.Col>
        )}
        {knowledgeSearchingList.length > 0 && (
          <Grid.Col sm={12} md={12} lg={4}>
            <Title order={3} mb={"md"}>
              Kiến Thức
            </Title>
            {knowledgeSearchingList.map((item: any, index: number) => (
              <p className="break-word hover:font-bold mb-3" key={index}>
                <Link to={`/kien-thuc/${item.id}`} onClick={() => onClose()}>
                  {item.title}
                </Link>
              </p>
            ))}
          </Grid.Col>
        )}
        {productSearchingList.length > 0 && (
          <Grid.Col sm={12} md={12} lg={4}>
            <Title order={3} mb={"md"}>
              Sản Phẩm
            </Title>
            {productSearchingList.map((item: any, index: number) => (
              <p className="break-word hover:font-bold mb-3 capitalize" key={index}>
                <Link to={item.linkShoppe} target="_blank" onClick={() => onClose()}>
                  {item.name}
                </Link>
              </p>
            ))}
          </Grid.Col>
        )}
      </Grid>
    </>
  );
};

export default SearchSection;
