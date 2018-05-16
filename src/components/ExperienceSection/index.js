import React from 'react';
import Section from '../Section';
import ExperienceUnit from '../ExperienceUnit';

import bearlingoLogo from '../../assets/images/experience/bearlingo-logo.svg';
import privateconsultingLogo from '../../assets/images/experience/privateconsulting-logo.png';
import tipsLogo from '../../assets/images/experience/tips-logo.png';

class ExperienceSection extends React.Component {
	render() {
		return (
			<Section title="Experience">
				<div className="row">
					<ExperienceUnit
						logo={bearlingoLogo}
						colour="#33ccff"
						title="Bearlingo"
						link="https://www.bearlingo.com/"
						timeperiod="2016 - Present"
						subtitle="Created an innovative English learning online platform
                      for ESL students through multiple researches with various linguists."
					/>
					<ExperienceUnit
						logo={privateconsultingLogo}
						colour="#FFFFFF"
						title="Private Consulting"
						link="http://jaelee.info/products"
						timeperiod="2017 - Present"
						subtitle="Represented businesses in negotiation deals with landlords and suppliers.
                      Designed and executed central marketing strategies. Managed finances, renovations,
                      and supply chains for local restauranteurs."
					/>
					<ExperienceUnit
						logo={tipsLogo}
						colour="#000033"
						title="TIPS"
						link="http://www.jointips.or.kr/about_en.php"
						timeperiod="Summer 2016 & Summer 2017"
						subtitle="Performed market research for firms engaging in American, Korean, and Chinese markets.
                  Provided consultation for the startup teams with market expansion and demographic research."
					/>
				</div>
			</Section>
		);
	}
}

export default ExperienceSection;
