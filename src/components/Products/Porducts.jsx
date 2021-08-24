import { connect } from 'react-redux';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, makeStyles} from '@material-ui/core/';
import { increment } from '../../store/actions/actions';
import { If, Then, Else } from 'react-if';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '75%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Produts = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.products.products.map((product) => {
          return (
            <Grid item key={product._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.url}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>Price: ${product.price}</Typography>
                  <Typography>
                    {product.inStock > 0
                      ? `In stock, ${product.inStock} items left`
                      : 'Out of Stock'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <If condition = {product.inStock > 0}>
                    <Then>
                      <Button
                        size="medium"
                        color="primary"
                        onClick={() => props.increment(product)}
                      >
                        ADD TO CART
                      </Button>
                    </Then>
                    <Else>
                      <Button
                        disabled
                        size="medium"
                        color="primary"
                        onClick={() => props.increment(product)}
                      >
                        ADD TO CART
                      </Button>
                    </Else>
                  </If>
                  <Button size="medium" color="primary">
                    VIEW DETAILS
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { increment };
export default connect(mapStateToProps, mapDispatchToProps)(Produts);
