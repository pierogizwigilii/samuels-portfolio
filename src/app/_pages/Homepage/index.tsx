import React from 'react';
import SideNav from '../../_components/SideNav';
import Grid from '../../_components/Grid';
import HomepageHero from '../../_components/HomepageHero';
import GridItem from '@/app/_components/GridItem';
import StickyTitle from '@/app/_components/StickyTitle';
import HeroGrid from '@/app/_components/HeroGrid';
import ContentGrid from '@/app/_components/ContentGrid';
import GridGutter from '@/app/_components/GridGutter';

import classes from "./index.module.scss";
import fetchProjects from '@/app/_api/fetchProjects';

const Homepage = async (props) => {
 // First, let's organize projects by category pairs
 const organizeProjectsByCategory = (projects) => {
    const organized = {};
    const orderArray = []; // To maintain category order
    
    projects.forEach(project => {
      if (!project.categories || project.categories.length === 0) return;
      
      const parentCategory = project.categories.find(cat => !cat.parent);
      const subcategory = project.categories.find(cat => cat.parent === parentCategory?.id);
      
      const categoryKey = subcategory 
        ? `${parentCategory.title}/${subcategory.title}`
        : `${parentCategory.title}`;
        
      if (!organized[categoryKey]) {
        organized[categoryKey] = {
          parent: parentCategory,
          sub: subcategory,
          projects: []
        };
        orderArray.push(categoryKey);
      }
      
      organized[categoryKey].projects.push(project);
    });
    
    return { organized, orderArray };
  };

  const projects = await fetchProjects();
  const { organized: categoryGroups, orderArray } = organizeProjectsByCategory(projects.docs);

  return (
    <div className={classes.homepageContainer}>
        <HeroGrid>
            <SideNav />
            <HomepageHero />
        </HeroGrid>
        <div className="portfolio-grids">
        {orderArray.map((categoryKey, index) => {
        const categoryData = categoryGroups[categoryKey];
        const previousCategoryKey = index > 0 ? orderArray[index - 1] : null;
        const previousCategoryData = previousCategoryKey ? categoryGroups[previousCategoryKey] : null;
        
        // Check if we should show the parent category
        const showParentCategory = !previousCategoryData || 
          previousCategoryData.parent.title !== categoryData.parent.title;

        return (
          <ContentGrid key={categoryKey}>
            <GridGutter>
              <StickyTitle>
                {showParentCategory && <h2>{categoryData.parent.title}</h2>}
                {categoryData.sub && (
                  <h3>
                    {categoryData.sub.title}
                  </h3>
                )}
              </StickyTitle>
            </GridGutter>

            <div className="main-content">
              <section className="section">
                {categoryData.projects.map(project => {
                  const date = project.creationDate ? new Date(project.creationDate) : null;
                  const formattedDate = date ? date.toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : '';

                  return (
                    <GridItem
                      key={project.id}
                      columnSpan={1}
                      rowSpan={2}
                      content={project}
                    >
                      {project.coverImage && (
                        <img
                          src={project.coverImage.url}
                          alt={project.coverImage.alt || project.title}
                          className="cover-image"
                        />
                      )}
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                      <p>{formattedDate}</p>
                    </GridItem>
                  );
                })}
              </section>
            </div>
          </ContentGrid>
        );
      })}
        </div>
    </div>
  );

}

export default Homepage;