# HarryLand Magic World
## Outline

## Get Started
This project addresses a broad subject, with the most important aspects being context and routes. The main features include the requirement for users to log in or sign up to access content. Following that, the home page features a slider and categories. The about page provides information, and the products page serves all available products. There is also a button to add items to your shopping cart, and you can adjust the quantity.

Two different mock APIs have been created for data—one for carts and the other for products. All images and content have been sourced from [harrypottershop](https://harrypottershop.co.uk/).
CSS has been implemented using Tailwind.
## Login Page
In page has been created as a context to enable access to user information from any part of the application. When users fill in the inputs, the data is saved to session storage and utilized accordingly. This context is wrapped around all routes, and it includes a logout function. Clicking the logout button triggers this function, deleting all user information from session storage. Additionally, the PrivateRouter is implemented to create routes based on user information.
```javascript
const LoginProvider = ({ children }) => {
  // ? get user info from storage or create empty
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || "";
...
export const useLogin=()=>{
    return useContext(LoginContext)
}
}
```
##### Usage
```javascript
  const {user} = useLogin();
```
## Navbar
The page has been listed, and paths have been assigned for each component.Example:
```javascript
              <NavLink
                to="products"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${location.pathname==="/home/products" ? "text-white scale-105" : ""}` }
              >
                Products
              </NavLink>
```
## Home Page
This page features a slider and a card list categorized by product types.
## HoemCardInfo
When you click on a category from the home page, it navigates to a page that displays filtered products. To achieve this, a specific state is defined in the `HomeCard` component. When the link directs to another page, it captures the category information. In the `HomePageInfo` component, the category is retrieved using `useLocation()` and filtered accordingly using this prop.
#### Send state
```javascript
      <Link to={link} state={{category}}>
```
#### Get state
```javascript
    const location = useLocation();
    const category = location.state?.category;
    const filtered = products.filter((product) => product.category === category);
```
## Products
All product data is retrieved from the API, allowing access to it from any part of the application. To facilitate this, another context called ProductProvider has been created. This context fetches all the data and lists it on the products page. Users can add products to their cart from this page.
```javascript
const ProductContext=createContext()
const ProductProvider = ({children}) => {
...
  const values={
    loading,
    products,
  }
}
```

## Add to Cart

A different API is utilized for the cart functionality. When adding items to the cart, the POST method is employed. In the shopping cart, users can view added products and have the option to modify quantities or delete items. This process involves CRUD operations: when changing the quantity, a PUT request is sent, and when deleting products, a DELETE request is sent. Consequently, the API is updated each time a modification is made.

For update methods used in more than one place, another context has been created to streamline and centralize these operations.
```javascript
const ShoppingCartContext = createContext();
const ShoppinCartProvider = ({ children }) => {
  const plusUpdate = async (id, stock) => {
    await updateData(id, stock);
    await getData();}
...
  const values={
    plusUpdate,total,minussUpdate,data,setData,getData}
}
```
## Last
To complete the process and proceed to the final shopping cart page, you should navigate to the next step.

###### However, sometimes it doesn't work successfully due to the occurrence of "too many requests." This issue may arise with the mock API, leading to occasional failures in fetching information.
## Live
[Link](https://harryland.vercel.app/)

