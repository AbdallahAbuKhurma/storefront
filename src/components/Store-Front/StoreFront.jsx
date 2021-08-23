import { connect } from 'react-redux';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Categories from '../Categories/Categories';
import Products from '../Products/Porducts';

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: '#cccccc',
    padding: theme.spacing(5, 0, 3),
  },
}));

const Store = (props) => {
  const classes = useStyles();
  let category = props.activeList.activeCategorie.display_name;
  let description =
    props.activeList.activeCategorie.description || 'Choose a category';
  return (
    <main>
      <div className={classes.content}>
        <Container maxWidth="sm" align="center">
          <Categories />
          <br />
          <br />
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="textPrimary"
            mt="3"
          >
            {category}
          </Typography>
          <br />
          <Typography
            component="p"
            variant="h5"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            {description}
          </Typography>
        </Container>
      </div>
      <Products className="main" />
    </main>
  );
};

const mapStateToProps = (state) => ({
  activeList: state.categories,
});

export default connect(mapStateToProps)(Store);
