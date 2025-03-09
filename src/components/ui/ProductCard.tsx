
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.demoUrl) {
      window.open(product.demoUrl, '_blank');
    } else {
      toast({
        title: "Demo not available",
        description: "Please contact sales for a personalized demo.",
        duration: 3000,
      });
    }
  };

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 h-full",
        featured ? "shadow-md hover:shadow-xl" : "hover:shadow-md",
        "hover-lift"
      )}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {featured && (
            <Badge className="absolute top-3 right-3 z-20 bg-primary">
              Featured
            </Badge>
          )}
          <Badge
            variant="outline"
            className="absolute top-3 left-3 z-20 bg-white/80 backdrop-blur-sm"
          >
            {product.category}
          </Badge>
        </div>
      </Link>

      <CardContent className="p-5 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/product/${product.id}`} className="group">
            <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center">
            <span className="text-sm font-medium text-amber-500 mr-1">
              {product.rating.toFixed(1)}
            </span>
            <svg
              className="w-4 h-4 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1 mt-2">
          {product.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
          {product.tags.length > 3 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{product.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 border-t border-border mt-auto">
        <div className="flex items-center justify-between w-full">
          <div className="text-lg font-semibold">
            ${product.price.toLocaleString()}
            <span className="text-xs text-muted-foreground">/mo</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleDemo}>
              Demo
            </Button>
            <Button size="sm" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
