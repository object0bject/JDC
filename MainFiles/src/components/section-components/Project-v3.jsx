import React, { Component } from 'react'
import Masonary from 'react-masonry-component';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';
import SectionTitle from '../global-components/SectionTitle';

const data = sectionData.projectV2;
const filtersbtn = [...data.singleProject.filterBtn];

export default class ProjectV3 extends Component {
   state = {
        projects: [...data.singleProject.filterItem],
        filterProject: []
    };

    componentDidMount() {
        this.setState({
            filterProject: this.state.projects
        });
    }

    handleClick = name => {
        let filterProject = [];
        if (name === "All") {
            filterProject = this.state.projects;

        } else {
            filterProject = this.state.projects.filter(
                (project, i) => project.origin.includes(name)
            );
        }
        var index = filtersbtn.map(function (e) { return e.name; }).indexOf(name);
        if (index + 1) {
            filtersbtn.forEach(item => {
                item.isActive = false;
            });
            filtersbtn[index].isActive = true;
        }
        this.setState({ filterProject });
    };

    render() {
        const imagesLoadedOptions = {
            itemSelector: '.filter-item',
            percentPosition: false,
            gutter: 0,
            resize: true,
            fitWidth: true
        };
        return (
       
<>
{/* <!--====================== project ======================--> */}
<section
  className="project project-style2 pb-120"
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        {/* <!--====================== section title ======================--> */}

        <SectionTitle title={data.sectionHeading.title} titleContent={data.sectionHeading.content} />

        {/* <!--====================== section title ======================--> */}
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div
          className="project-filter text-center wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-duration="1.5s"
        >
          {/* <!--====================== filter option ======================--> */}

          <ul className="filter" id="grid">
            
          {filtersbtn.map(({ name, value, isActive }) => (

                <li key={name} className={isActive === true ? 'active' : ''}>
                        <span value={value} className={`project-btn`} onClick={this.handleClick.bind(this, name)}>{name}</span>
                </li>
            ))}
           
          </ul>

          {/* <!--====================== End of filter option ======================--> */}
        </div>
      </div>
    </div>
</div>

    {/* <!--======================== project items inner ========================--> */}
    <div
      className="project-items-inner wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="1.5s"
    >
      <div className="project-item">
        <div className="grid" >
          {/* <!--======================== single project  ========================--> */}
          <Masonary className="portfolio-filter row no-gutters" imagesLoadedOptions={imagesLoadedOptions}>
          {
            this.state.filterProject.map((item, i) => ( 
                <div className={`col-md-6 col-lg-3 grid-item filter-item`} key={i}>
                    <div className="single-item mb-30">
                    <img src={item.image} alt="" />
                    <div className="project-action">
                        <span>{item.category}</span>
                        <h5>{item.title}</h5>
                        <Link to="/project-details" className="btn"><i className="flaticon-add-1"></i></Link>
                    </div>
                    </div>
                </div>
                ))
            }
        </Masonary>
         
          {/* <!--======================== single project ========================--> */}
        </div>
        {/* <!--======================== End of project items immer ========================--> */}
      </div>
    </div>
</section>
{/* <!--======================== End of project ========================--> */}
</>
        )
    }
}

