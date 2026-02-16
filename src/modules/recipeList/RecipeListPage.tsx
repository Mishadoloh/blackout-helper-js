import styles from './RecipeListPage.module.scss';
import { FilterByPower } from '../../shared/ui/filters/filterByPower';
import { FilterByType } from "../../shared/ui/filters/filterByType";
import { FilterByTime } from "../../shared/ui/filters/filterByTime";
import { FilterByComplexity } from "../../shared/ui/filters/filterByComplexity";
import { RecipeList } from "../../shared/ui/recipeList";
import { useContext } from "react";
import { RecipesContext } from "../../shared/context/RecipesContext";
import { Loader } from "../../shared/ui/loader";
import { ErrorMessage } from "../../shared/ui/errorMessage";
// import { AdditionalFilters } from "../../shared/ui/filters/AdditionalFilters";

export const RecipeListPage = () => {
  const { recipes, loading, errorMessage } = useContext(RecipesContext);

  console.log('recipes: ', recipes);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Recipe List
      </h1>

      <div className={styles.filters}>
        <FilterByPower />

        {/* <AdditionalFilters /> */}

        <div className={styles.addFilters}>
          <FilterByType value={'all'}/>
          <FilterByTime value={'all'}/>
          <FilterByComplexity value={'all'}/>
        </div>
      
      </div>

      {loading && <Loader />}

      {!loading && errorMessage && <ErrorMessage />}

      {!loading && !errorMessage && recipes.length > 0 && (
        <RecipeList recipes={recipes}/>
      )}
    </div>
  );
};