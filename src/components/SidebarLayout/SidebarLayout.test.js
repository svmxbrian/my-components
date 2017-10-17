import React from "react";
import SidebarLayout from "./SidebarLayout";
import { shallow } from "enzyme";

describe("SidebarLayout", () => {
  let layout;
  it("renders without crashing", () => {
    const wrapper = shallow(<SidebarLayout />);
    expect(wrapper).toBeDefined();
  });

  it(`should render its children inside itself`, () => {
    let html = "<div><div>This is a test</div></div>";
    layout = shallow(
      <SidebarLayout>
        <div>
          <div>This is a test</div>
        </div>
      </SidebarLayout>
    );
    expect(layout.html()).toContain(html);
  });
});
