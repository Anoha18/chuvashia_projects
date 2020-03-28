export default ({ store, redirect }) => {
  // If the user is not authenticated
  if (!store.getters['user/isAuth']) {
    return redirect('/admin/login');
  }
}
