import React from 'react';
import { Link } from 'react-router';
import { Line } from 'rc-progress';
import NumberFormat from 'react-number-format';

class ProjectBlurb extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { project } = this.props;
    const percent = project.funding_amount;

    let dateEnd = new Date(project.end_date);
    let dateStart = new Date();
    let timeDiff = Math.abs(dateStart.getTime() - dateEnd.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return(
      <div className='project-blurb'>

          <section className='top-wrapper'>

            <div className='blurb-header'>
              <Link to={`/projects/${ project.id }`}><img className='blurb-image' src={ project.project_pic }/></Link>
            </div>

            <div className='blurb-middle'>
              <strong>{ project.title }</strong>
              <h3 className='blurb-org'>{ project.organization }</h3>
              <h3 className='blurb-description'>{ project.short_description }</h3>
            </div>

          </section>

          <div className='blurb-footer'>
            <h3><i className="fa fa-map-marker"></i>{ project.city }, { project.state }</h3>
            <span className='line-span'><Line percent={ project.percentage } strokeWidth='2' strokeColor='#2BDE73'/></span>
            <div className='blurb-footer-footer'>
              <div>
                <h3><strong>{ project.percentage }%</strong></h3>
                <h3>funded</h3>
              </div>
              <div className='blurb-footer-pledged'>
                <h3><strong>
                  <NumberFormat
                    value={ project.contributions }
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </strong></h3>
              <h3>pledged</h3>
              </div>

              <div className='blurb-footer-days'>
                <h3><strong>{ diffDays }</strong></h3>
                <h3>days left</h3>
              </div>

            </div>
          </div>

      </div>
    );
  }
}

export default ProjectBlurb;
