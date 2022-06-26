import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BreadcrumbComponent } from "./breadcrumb.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BreadcrumbComponent", () => {

  let fixture: ComponentFixture<BreadcrumbComponent>;
  let component: BreadcrumbComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BreadcrumbComponent]
    });

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
