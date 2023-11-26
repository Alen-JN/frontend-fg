import React from 'react'
import pond from '../../../media/Pond.svg'
function CasestudyIntro() {
  return (
    <div className='Introtext1'>
        <h3>Introduction</h3>
        <p>In India, the practice of aquaculture has traditionally relied on time-tested methods, with limited incorporation of technology. Over time, there has been a noteworthy shift in shrimp culture methods, transitioning from extensive practices, stocking 40,000-50,000 PL per acre, to semi-intensive approaches, with higher stocking densities reaching 1.5 lakh PL per acre. This evolution in techniques draws a comparison between the Latin American model, exemplified by Ecuador, featuring large ponds (50,000m2), stocking 12-15 post-larvae per square meter (PL/m2), and yielding around 4 tonnes per hectare annually. On the other hand, the Asian model, represented by India, utilizes smaller 6,000m2 ponds, with higher stocking densities of 30-40 PL/m2, resulting in yields of approximately 10 tonnes per hectare per year. Notably, the lower disease stress in larger ponds, attributed to their predominantly photosynthetic nature, underscores the significance of pond size in disease management. Introducing foreign species, such as Venamini, in the Indian context brings challenges, as diseases contribute to a heightened failure rate, demanding a disciplined approach to farming. Despite the inclination of farmers like Nishant Reddy to embrace technology for enhanced efficiency, the existing tech-enabled solutions often lack the necessary customization to seamlessly integrate with the unique dynamics of shrimp farming in India.</p>
        <div className='Introtext2'>
        <h3>They lack the customizations needed to align with the unique requirements of his farm and the local environment.</h3>
        <p>
        The intensive model of shrimp cultivation holds immense promise for technological integration, particularly in the selection of disease-free brood stock, precision nutrition management, handling survival in stress situations, and implementing analytics for effective farm management.This integration can not only enhance productivity but also contribute to deflation in production costs and reduction in carbon footprint. By pioneering the incorporation of tailor-made technology solutions in shrimp farming, farmers like Nishant Reddy have the potential to revolutionize the industry, making it more efficient, economically viable, and ecologically sustainable.
        </p>
       </div>
       <div className='PondPhoto'>
        <img src={pond} alt="Photo"/>
        <p>An image of Nishant Reddy’s farm</p>
       </div>
    </div>
    
  )
}

export default CasestudyIntro