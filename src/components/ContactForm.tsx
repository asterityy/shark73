import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    telegram: "",
    interests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Отправка данных в Telegram
    const token = "8100479301:AAGoY8q4rKuZXDOzhZ1X-6nP_xBSEyvyFjQ";
    const chatId = "1271362249";
    const message = `Новая заявка с сайта!%0AИмя: ${formData.name}%0AВозраст: ${formData.age}%0AТелефон: ${formData.phone}%0AТелеграм: ${formData.telegram}%0AИнтересует: ${formData.interests}`;
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `chat_id=${chatId}&text=${message}`,
      });
      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", age: "", phone: "", telegram: "", interests: "" });
      onClose();
    } catch (error) {
      toast.error("Ошибка отправки. Попробуйте позже.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            Записаться на тренировку
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Как вас зовут?</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Сколько вам лет?</Label>
            <Input
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Возраст"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___-__-__"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegram">Ник в Телеграм</Label>
            <Input
              id="telegram"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="@username"
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">Какие группы интересуют?</Label>
            <Textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="Детские/взрослые группы, персональные тренировки..."
              className="bg-background border-border min-h-[80px]"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Отправить заявку
          </button>
          
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
