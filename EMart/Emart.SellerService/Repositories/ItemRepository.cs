using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repository
{
    public class ItemRepository : IItemRepository
    {

        private readonly EmartDBContext _context;
        public ItemRepository(EmartDBContext context)
        {
            _context = context;

        }
        public void AddItem(Items iobj)
        {

            _context.Add(iobj);
            _context.SaveChanges();
        }

        public void DeleteItem(string id)
        {
            Items item = _context.Items.Find(id);
            _context.Remove(item);
            _context.SaveChanges();
        }

        public Items GetItem(string itemid)
        {
            return _context.Items.Find(itemid);
        }

        public void UpdateItem(Items obj)
        {
            _context.Items.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> ViewItems()
        {


            return _context.Items.ToList();
        }
        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategory(string cid)
        {
            return _context.SubCategory.Where(c=>c.CategoryId==cid).ToList();

        }
    }
}
