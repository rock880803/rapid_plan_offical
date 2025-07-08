import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEnvelope, faUser, faBuilding, faCheck, faRobot } from '@fortawesome/free-solid-svg-icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    message: '',
    agreeToTerms: false,
    captchaVerified: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaCode, setCaptchaCode] = useState('');
  const [userCaptchaInput, setUserCaptchaInput] = useState('');

  // 生成簡單的驗證碼
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  React.useEffect(() => {
    if (isOpen) {
      setCaptchaCode(generateCaptcha());
      setUserCaptchaInput('');
      setFormData(prev => ({ ...prev, captchaVerified: false }));
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // 清除錯誤訊息
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setUserCaptchaInput(value);
    
    if (value === captchaCode) {
      setFormData(prev => ({ ...prev, captchaVerified: true }));
      setErrors(prev => ({ ...prev, captcha: '' }));
    } else {
      setFormData(prev => ({ ...prev, captchaVerified: false }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = '請輸入單位名稱';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = '請輸入您的姓名';
    }

    if (!formData.email.trim()) {
      newErrors.email = '請輸入聯絡信箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '請輸入有效的電子信箱格式';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = '請同意使用者資料保護聲明';
    }

    if (!formData.captchaVerified) {
      newErrors.captcha = '請正確輸入驗證碼';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 模擬提交過程
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 這裡可以添加實際的表單提交邏輯
      console.log('表單提交:', formData);
      
      // 重置表單
      setFormData({
        companyName: '',
        fullName: '',
        email: '',
        message: '',
        agreeToTerms: false,
        captchaVerified: false
      });
      setUserCaptchaInput('');
      
      // 關閉模態框
      onClose();
      
      // 可以顯示成功訊息
      alert('感謝您的聯絡！我們會盡快回覆您。');
      
    } catch (error) {
      console.error('提交失敗:', error);
      alert('提交失敗，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setUserCaptchaInput('');
    setFormData(prev => ({ ...prev, captchaVerified: false }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">聯絡我們</h2>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* 基本資訊 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">基本資訊</h3>
                
                {/* 單位名稱 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                    單位名稱 *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="請輸入您的公司或組織名稱"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                  )}
                </div>

                {/* 您的姓名 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    您的姓名 *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="請輸入您的姓名"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                  )}
                </div>

                {/* 聯絡信箱 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    聯絡信箱 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="請輸入您的電子信箱"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* 訊息內容 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    訊息內容
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="請描述您的需求或想法..."
                  />
                </div>
              </div>

              {/* 內容細節 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">內容細節</h3>
                
                {/* 驗證碼 */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faRobot} className="mr-2" />
                    防止機器人驗證 *
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg font-mono text-lg font-bold text-gray-900 dark:text-white border-2 border-dashed border-gray-300 dark:border-gray-600 select-none">
                      {captchaCode}
                    </div>
                    <motion.button
                      type="button"
                      onClick={refreshCaptcha}
                      className="px-3 py-2 text-sm bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      重新產生
                    </motion.button>
                  </div>
                  <input
                    type="text"
                    value={userCaptchaInput}
                    onChange={handleCaptchaChange}
                    className={`w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.captcha ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="請輸入上方驗證碼"
                    maxLength={5}
                  />
                  {formData.captchaVerified && (
                    <div className="flex items-center gap-2 mt-2 text-green-600 dark:text-green-400">
                      <FontAwesomeIcon icon={faCheck} />
                      <span className="text-sm">驗證成功</span>
                    </div>
                  )}
                  {errors.captcha && (
                    <p className="mt-1 text-sm text-red-500">{errors.captcha}</p>
                  )}
                </div>

                {/* 資料同意 */}
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      我同意 <span className="text-blue-600 dark:text-blue-400 hover:underline">使用者資料保護聲明</span> *
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
                  )}
                </div>
              </div>

              {/* 提交按鈕 */}
              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  取消
                </motion.button>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg transition-colors font-semibold"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      提交中...
                    </div>
                  ) : (
                    '送出訊息'
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;