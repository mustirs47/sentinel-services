import type { ComponentProps, ComponentType } from "react";
import {
  Warning,
  ArrowLeft as PhArrowLeft,
  ArrowRight as PhArrowRight,
  Medal,
  ChartBar,
  BookOpen as PhBookOpen,
  Briefcase as PhBriefcase,
  Buildings,
  CalendarCheck as PhCalendarCheck,
  Check as PhCheck,
  CheckCircle as PhCheckCircle,
  CaretDown,
  CaretRight,
  ClipboardText,
  Cookie as PhCookie,
  DoorOpen as PhDoorOpen,
  Factory as PhFactory,
  FileText as PhFileText,
  Gift as PhGift,
  GraduationCap as PhGraduationCap,
  Handshake as PhHandshake,
  HardHat as PhHardHat,
  Heartbeat,
  House,
  Bank,
  Envelope,
  MapPin as PhMapPin,
  List,
  ChatCircle,
  Confetti,
  Radio as PhRadio,
  ArrowsClockwise,
  Scales,
  MagnifyingGlass,
  PaperPlaneTilt,
  Gear,
  Shield as PhShield,
  ShieldCheck as PhShieldCheck,
  ShoppingBag as PhShoppingBag,
  Sparkle,
  Star as PhStar,
  Target as PhTarget,
  UserCircleCheck,
  Users as PhUsers,
  X as PhX,
  Lightning,
  type IconProps,
  type Icon as PhIcon,
} from "@phosphor-icons/react";

/**
 * Brand icon set: Phosphor Duotone.
 * Wrapped so existing call-sites that use Lucide-style names + Tailwind
 * h-/w- size classes keep working unchanged. Default weight is "duotone"
 * which renders a two-tone, professional look consistent with the brand.
 */
const wrap = (Cmp: PhIcon, fallbackWeight: IconProps["weight"] = "duotone") => {
  const Wrapped = (props: ComponentProps<typeof Cmp>) => (
    <Cmp weight={fallbackWeight} {...props} />
  );
  Wrapped.displayName = `Icon(${Cmp.displayName ?? "phosphor"})`;
  return Wrapped as ComponentType<ComponentProps<typeof Cmp>>;
};

// Use regular (single-weight) for tiny chrome icons so they stay crisp.
const wrapRegular = (Cmp: PhIcon) => wrap(Cmp, "regular");
const wrapBold = (Cmp: PhIcon) => wrap(Cmp, "bold");

export const AlertTriangle = wrap(Warning);
export const ArrowLeft = wrapBold(PhArrowLeft);
export const ArrowRight = wrapBold(PhArrowRight);
export const Award = wrap(Medal);
export const BarChart3 = wrap(ChartBar);
export const BookOpen = wrap(PhBookOpen);
export const Briefcase = wrap(PhBriefcase);
export const Building = wrap(Buildings);
export const Building2 = wrap(Buildings);
export const CalendarCheck = wrap(PhCalendarCheck);
export const Check = wrapBold(PhCheck);
export const CheckCircle = wrap(PhCheckCircle);
export const ChevronDown = wrapRegular(CaretDown);
export const ChevronRight = wrapRegular(CaretRight);
export const ClipboardCheck = wrap(ClipboardText);
export const Cookie = wrap(PhCookie);
export const DoorOpen = wrap(PhDoorOpen);
export const Factory = wrap(PhFactory);
export const FileCheck = wrap(PhFileText);
export const FileText = wrap(PhFileText);
export const Gift = wrap(PhGift);
export const GraduationCap = wrap(PhGraduationCap);
export const Handshake = wrap(PhHandshake);
export const HardHat = wrap(PhHardHat);
export const HeartHandshake = wrap(PhHandshake);
export const HeartPulse = wrap(Heartbeat);
export const Home = wrap(House);
export const Hotel = wrap(Buildings);
export const Landmark = wrap(Bank);
export const Mail = wrap(Envelope);
export const MapPin = wrap(PhMapPin);
export const Menu = wrapRegular(List);
export const MessageSquare = wrap(ChatCircle);
export const PartyPopper = wrap(Confetti);
export const Radio = wrap(PhRadio);
export const RefreshCw = wrapRegular(ArrowsClockwise);
export const Scale = wrap(Scales);
export const Search = wrapRegular(MagnifyingGlass);
export const Send = wrap(PaperPlaneTilt);
export const Settings = wrap(Gear);
export const Shield = wrap(PhShield);
export const ShieldCheck = wrap(PhShieldCheck);
export const ShoppingBag = wrap(PhShoppingBag);
export const Sparkles = wrap(Sparkle);
export const Star = wrap(PhStar, "fill");
export const Target = wrap(PhTarget);
export const UserCheck = wrap(UserCircleCheck);
export const Users = wrap(PhUsers);
export const X = wrapRegular(PhX);
export const Zap = wrap(Lightning, "fill");