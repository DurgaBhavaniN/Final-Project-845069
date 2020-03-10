using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartDBContext _context;
        public BuyerRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void BuyItem(TransactionHistory item)
        {

            _context.TransactionHistory.Add(item);
            _context.SaveChanges();
        }

        public void EditProfile(Buyer obj)
        {
            _context.Buyer.Update(obj);
            _context.SaveChanges();
        }

        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }

        public Buyer GetProfile(string bid)
        {
            return _context.Buyer.Find(bid);

        }

        public List<Items> SearchItems(string name)
        {
            return _context.Items.Where(res => res.ItemName == name).ToList();
        }

        public List<SubCategory> SubCategory(string catid)
        {
            return _context.SubCategory.Where(res => res.CategoryId == catid).ToList();
        }

        public List<TransactionHistory> TransactionHistory(string bid)
        {
            return _context.TransactionHistory.Where(res => res.BuyerId == bid).ToList();

        }
        public void DeleteCartItems(string Id)
        { 
            Cart cart = _context.Cart.Find(Id);
            _context.Cart.Remove(cart);
            _context.SaveChanges();
        }
        public void AddtoCart(Cart cart)
            {
            _context.Add(cart);
            _context.SaveChanges();
        }
        public List<Items> GetAllItems()
                {
                    return _context.Items.ToList();
                }

                public List<Cart> GetCartItems()
                {
                    return _context.Cart.ToList();
                }
         public void ViewCart(string bid)
        {
             _context.Cart.Find(bid);
        }
        //public int GetCount(string bid)
        //{
        //    return _context.Cart.Where(res => res.BuyerId == bid).ToList().Count;
        //}
    }
}
