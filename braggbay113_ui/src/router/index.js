import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Users from  '@/pages/Users.vue';
import UserDetail from  '@/pages/UserDetail.vue';
import Products from  '@/pages/Products.vue';
import ProductDetail from  '@/pages/ProductDetail.vue';
import Categorys from  '@/pages/Categorys.vue';
import CategoryDetail from  '@/pages/CategoryDetail.vue';
import Listings from  '@/pages/Listings.vue';
import ListingDetail from  '@/pages/ListingDetail.vue';
import Bids from  '@/pages/Bids.vue';
import BidDetail from  '@/pages/BidDetail.vue';
import Payments from  '@/pages/Payments.vue';
import PaymentDetail from  '@/pages/PaymentDetail.vue';
import Reviews from  '@/pages/Reviews.vue';
import ReviewDetail from  '@/pages/ReviewDetail.vue';
import Messages from  '@/pages/Messages.vue';
import MessageDetail from  '@/pages/MessageDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
			redirect: '/users',
								  },
  {
    path: "/pricing",
    name: "PricingView",
    component: () => import("../views/PricingView.vue"),
  },
  {
    path: "/arts-gallery",
    name: "ArtsGalleryView",
    component: () => import("../views/ArtsGalleryView.vue"),
  },
  {
    path: "/checkout/:id",
    name: "CheckoutView",
    component: () => import("../views/CheckoutView.vue"),
  },
  {
    path: "/stripe-checkout",
    name: "StripeCheckoutView",
    component: () => import("../views/StripeCheckoutView.vue"),
  },
	{
		path: '/users',
		name: 'Users',
		layout: DefaultLayout,
		component: Users,
	},
	{
	    path: '/user/:userId', 
	    name: 'UserDetail',
		layout: DefaultLayout,
	    component: UserDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/products',
		name: 'Products',
		layout: DefaultLayout,
		component: Products,
	},
	{
	    path: '/product/:productId', 
	    name: 'ProductDetail',
		layout: DefaultLayout,
	    component: ProductDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/categorys',
		name: 'Categorys',
		layout: DefaultLayout,
		component: Categorys,
	},
	{
	    path: '/category/:categoryId', 
	    name: 'CategoryDetail',
		layout: DefaultLayout,
	    component: CategoryDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/listings',
		name: 'Listings',
		layout: DefaultLayout,
		component: Listings,
	},
	{
	    path: '/listing/:listingId', 
	    name: 'ListingDetail',
		layout: DefaultLayout,
	    component: ListingDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/bids',
		name: 'Bids',
		layout: DefaultLayout,
		component: Bids,
	},
	{
	    path: '/bid/:bidId', 
	    name: 'BidDetail',
		layout: DefaultLayout,
	    component: BidDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/payments',
		name: 'Payments',
		layout: DefaultLayout,
		component: Payments,
	},
	{
	    path: '/payment/:paymentId', 
	    name: 'PaymentDetail',
		layout: DefaultLayout,
	    component: PaymentDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/reviews',
		name: 'Reviews',
		layout: DefaultLayout,
		component: Reviews,
	},
	{
	    path: '/review/:reviewId', 
	    name: 'ReviewDetail',
		layout: DefaultLayout,
	    component: ReviewDetail,
	    props: true // Pass route params as props to the component
  	},
	{
		path: '/messages',
		name: 'Messages',
		layout: DefaultLayout,
		component: Messages,
	},
	{
	    path: '/message/:messageId', 
	    name: 'MessageDetail',
		layout: DefaultLayout,
	    component: MessageDetail,
	    props: true // Pass route params as props to the component
  	},
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
