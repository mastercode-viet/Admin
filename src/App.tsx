import { Authenticated, GitHubBanner, Refine } from "@refinedev/core"
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools"
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"

import { ErrorComponent, ThemedLayoutV2, ThemedSiderV2, useNotificationProvider } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router"
import dataProvider from "@refinedev/simple-rest"
import { App as AntdApp } from "antd"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { authProvider } from "./authProvider"
import { Header } from "./components/header"
import { ColorModeContextProvider } from "./contexts/color-mode"

import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./pages/categories"
import { ForgotPassword } from "./pages/forgotPassword"
import { Login } from "./pages/login"
import { Register } from "./pages/register"
import { UserCreate } from "./pages/users/create"
import { UsersList } from "./pages/users/list"
import { UserEdit, UserShow } from "./pages/users"
import { ProductsList, ProductsCreate, ProductsEdit, ProductsShow } from "./pages/products"
import LayoutClient from "./components/layoutClient/LayoutClient"
import ProductGrid from "./pages/home_client/products"
import Detail from "./pages/detail_client/detail"
import HomePage from "./pages/home_client/HomePage"
import { Dashboard } from "./pages/dashboard/dashboard";
import ShopPage from "./pages/Shop_client/shop"

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider("http://localhost:3000")}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  {
                    name: "products",
                    list: "/admin/products",
                    create: "/admin/products/create",
                    edit: "/admin/products/edit/:id",
                    show: "/admin/products/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "categories",
                    list: "/admin/categories",
                    create: "/admin/categories/create",
                    edit: "/admin/categories/edit/:id",
                    show: "/admin/categories/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "users",
                    list: "/admin/users",
                    create: "/admin/users/create",
                    edit: "/admin/users/edit/:id",
                    show: "/admin/users/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "0GhN8h-KHSJOg-62gDNs",
                }}
              >
                <Routes>
                  <Route element={<LayoutClient />}>
                    <Route index element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/home" element={<h1>Home</h1>} />
                    <Route path="/products" element={<ProductGrid />} />
                    <Route path="/products/:id" element={<Detail />} />
                  </Route>

                  <Route
                    path="/admin/*"
                    element={
                      <Authenticated key="authenticated-inner" fallback={<CatchAllNavigate to="/login" />}>
                        <ThemedLayoutV2 Header={Header} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route index element={<Dashboard />} />
                    <Route path="categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route>
                    <Route path="users">
                      <Route index element={<UsersList />} />
                      <Route path="create" element={<UserCreate />} />
                      <Route path="edit/:id" element={<UserEdit />} />
                      <Route path="show/:id" element={<UserShow />} />
                    </Route>
                    <Route path="products">
                      <Route index element={<ProductsList />} />
                      <Route path="create" element={<ProductsCreate />} />
                      <Route path="edit/:id" element={<ProductsEdit />} />
                      <Route path="show/:id" element={<ProductsShow />} />
                    </Route>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>

                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="*" element={<ErrorComponent />} />
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  )
}

export default App;

