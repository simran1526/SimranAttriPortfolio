import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  link?: string;
  badge?: "IBM" | "NCITTS" | "LPU";
}

const CertificationCard = ({ title, issuer, link, badge }: CertificationCardProps) => {
  const getBadgeColor = (badgeType?: string) => {
    switch (badgeType) {
      case "IBM":
        return "bg-blue-500/10 text-blue-600 border-blue-500/30";
      case "NCITTS":
        return "bg-green-500/10 text-green-600 border-green-500/30";
      case "LPU":
        return "bg-purple-500/10 text-purple-600 border-purple-500/30";
      default:
        return "bg-cyber-teal/10 text-cyber-teal border-cyber-teal/30";
    }
  };

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className={`group transition-all duration-300 hover:-translate-y-1 bg-gradient-card border border-cyber-purple/20 backdrop-blur-sm ${
        link ? 'cursor-pointer hover:shadow-cyber-purple' : ''
      }`}
      onClick={handleClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="font-orbitron text-base text-cyber-dark group-hover:text-cyber-purple transition-colors duration-300 flex-1">
            {title}
          </CardTitle>
          {link && (
            <ExternalLink className="w-4 h-4 text-cyber-purple opacity-70 group-hover:opacity-100 transition-opacity duration-300 ml-2 flex-shrink-0" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{issuer}</span>
          {badge && (
            <Badge className={`text-xs ${getBadgeColor(badge)}`}>
              {badge}
            </Badge>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default CertificationCard;