import { Stack, styled, Box, Button, Tabs, Tab } from "@mui/material";

import { Icon } from "../common/icon/icon";
import headSetIconWhite from "../../assets/icons/headSetWhite.svg";
import { ExpertDropdown } from "../common/dropdowns/dropdowns";
import {
  ExploreExpertBox,
  InputContainer,
  Title,
  ButtonContainer,
  MainContainer,
  GetInTouchButtonExplore,
  SearchButton,
  DropDownTitleBox,
  DropDownTitle,
  AlignedBox,
} from "./exporeExpert.styles";
import { ExploreExpertTab } from "../exploreExpertTab";

import { useContext } from "react";
import { MainContext } from "../../pages/main/main";

const gender = ["male", "female", "others"];

const ExploreDropdownBox = ({ placeholder, label }) => {
  return (
    <Stack>
      <DropDownTitleBox>
        <DropDownTitle>{label}</DropDownTitle>
      </DropDownTitleBox>
      <ExpertDropdown items={gender} placeholder={placeholder} />
    </Stack>
  );
};

export const ExploreExpert = () => {
  const {approchType} = useContext(MainContext);
  return (
    <ExploreExpertBox approchType={approchType} >
      <Title variant="primaryTitle" color="secondary">
        Explore Experts For Upper Back Treatment
      </Title>
      <MainContainer>
        <AlignedBox>
          <ExploreExpertTab />
        </AlignedBox>

        <InputContainer>
          <ExploreDropdownBox placeholder={"select age"} label={"Age"} />
          <ExploreDropdownBox placeholder={"select age"} label={"Gender"} />
        </InputContainer>
        <AlignedBox>
          <ButtonContainer>
            <SearchButton variant="contained" color="buttonSecondary">
              Search
            </SearchButton>
            <GetInTouchButtonExplore
              variant="contained"
              color="buttonPrimary"
              startIcon={<Icon src={headSetIconWhite} className={"header_icon"} />}
            >
              Get in touch
            </GetInTouchButtonExplore>
          </ButtonContainer>
        </AlignedBox>
      </MainContainer>
    </ExploreExpertBox>
  );
};
