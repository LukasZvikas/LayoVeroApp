import React from "react";
import { shallow, mount } from "enzyme";
import SearchBar from "../components/screens/dashScreens/search/indexDashItems/searchBarItems/SearchBar";
import { SearchBarIcon } from "../components/screens/dashScreens/search/indexDashItems/searchBarItems/searchBarIcon";
import Root from "../../root";
import renderer from "react-test-renderer";

it("shows SearchBarIcon", () => {
  const wrapper = renderer
    .create(
      <Root>
        <SearchBarIcon />
      </Root>
    )
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
