import React from 'react';
import { connect } from 'react-redux';
import { increment, show, decrement } from '../../store/actions/actions';
import { Button, Box, Typography, Drawer, List, ListItem, Grid, Divider, makeStyles } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
  list: {
    width: 450,
  },
});

const SimpleCart = (props) => {
  const classes = useStyles();
  let display = props.cart.display || [];
  return (
    <>
      <Button color="inherit" onClick={() => props.show(!props.cart.show)}>
        <Box
          display="flex"
          width={130}
          height={50}
          borderRadius={7}
          bgcolor="lightpink"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" mx={3}>
            cart ({props.cart.count})
          </Typography>
        </Box>
      </Button>
      <Drawer
        anchor="right"
        open={props.cart.show}
        onClose={() => props.show(false)}
      >
        <List className={classes.list}>
          <ListItem>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              wrap="wrap"
              spacing={2}
            >
              <Typography variant="h4">Cart</Typography>
            </Grid>
          </ListItem>
          <Divider />
          {display.map((product) => {
            return (
              <ListItem key={product.id}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  wrap="wrap"
                  spacing={2}
                >
                  <Typography variant="h6">
                    <strong>{product.name}</strong> ({product.count + 1})
                  </Typography>
                  <RemoveIcon/>
                    Quantity {' '} ({product.count +1})
                  <AddIcon/>
                  <DeleteOutlinedIcon
                    color = 'secondary'
                    onClick={() => props.decrement(product)}
                  />
                </Grid>
              </ListItem>
            );
          })}
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = { increment, show, decrement};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
