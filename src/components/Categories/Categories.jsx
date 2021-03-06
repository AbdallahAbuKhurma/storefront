import { connect } from 'react-redux';
import { active } from '../../store/actions/actions';
import { Button, Grid } from '@material-ui/core';

const Categories = (props) => {
  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {props.activeList.categories.map((category) => {
          return (
            <Grid item key={category.name}>
              <Button
                variant="outlined"
                color = 'inherit'
                onClick={() => props.active(category.name)}
              >
                {category.display_name}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeList: state.categories,
});

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
